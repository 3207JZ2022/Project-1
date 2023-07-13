import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';

import {authenticateSuccess} from './auth.actions';
import { User } from 'src/app/account/firebaseUser.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  username: string,
  portraitImg: string,  
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

// set up local storage return and an action of authenticateSuccess
const handleAuthentication = (
  email: string,
  username: string,
  userId: string,
  portraitImg: string,  
  expiresIn: number,
  token: string
) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  const user = new User(email, username, userId, portraitImg, token, expirationDate);
  localStorage.setItem('userData', JSON.stringify(user));
  return AuthActions.authenticateSuccess({
    email: email,
    username: username,
    userId: userId,
    portraitImg: portraitImg,
    token: token,
    expirationDate: expirationDate,
    redirect: true
  });
};

const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(AuthActions.authenticateFail({errorMesseage :errorMessage}));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email exists already';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exist.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'This password is not correct.';
      break;
  }
  return of(AuthActions.authenticateFail({errorMesseage: errorMessage} ));
};

// effect is invoked whenever a selector emits a new value
@Injectable()
export class AuthEffects {
  authSignup=createEffect(()=>{
    return this.actions$.pipe(
      ofType(AuthActions.SIGNUP_START),
      switchMap((signupAction: ReturnType<typeof AuthActions.signupStart>) => {
        return this.http
          .post<AuthResponseData>(
              environment.firebaseSignUpApi +
              environment.firebaseAPIKey,
            {
              email: signupAction.email,
              password: signupAction.password,
              firstName: signupAction.firstName,
              lastName: signupAction.lastName,
              returnSecureToken: true
            }
          )
          .pipe(
            tap(resData => {
              this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }),
            map(resData => {
              return handleAuthentication(
                resData.email,
                resData.username,
                resData.localId,
                resData.portraitImg,
                +resData.expiresIn,
                resData.idToken
              );
            }),
            catchError(errorRes => {
              return handleError(errorRes);
            })
          );
      })
    );
  })

  authLogin=createEffect(()=>{
    return this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: ReturnType<typeof AuthActions.loginStart>) => {
        return this.http
          .post<AuthResponseData>(
              environment.firebaseSignInAPI +
              environment.firebaseAPIKey,
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            }
          )
          .pipe(
            tap(resData => {
              this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }),
            map(resData => {
              return handleAuthentication(
                resData.email,
                resData.username,
                resData.localId,
                resData.portraitImg,
                +resData.expiresIn,
                resData.idToken
              );
            }),
            catchError(errorRes => {
              return handleError(errorRes);
            })
          );
      })
    );
  })

  authRedirect=createEffect(()=>{
    return this.actions$.pipe(
      ofType(AuthActions.AUTHENTICATE_SUCCESS),
      // tap((authSuccessAction: AuthActions.AuthenticateSuccess) => {
      tap((authSuccessAction:  ReturnType<typeof authenticateSuccess>) => {
        if (authSuccessAction.redirect) {
          this.router.navigate(['/']);
        }
      })
    );
  },{dispatch:false})


  autoLogin = createEffect(()=>{
    return this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      map(() => {
        const userData: {
          email: string;
          username: string;
          id: string;
          portraitImg: string;
          _token: string;
          _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData') || '{}');

        if (!userData) {
          return { type: 'DUMMY' };
        }
  
        const loadedUser = new User(
            userData.email,
            userData.username,
            userData.id,
            userData.portraitImg,
            userData._token,
           new Date(userData._tokenExpirationDate)
        );
  
        if (loadedUser.token) {
          // this.user.next(loadedUser);
          const expirationDuration =
            new Date(userData._tokenExpirationDate).getTime() -
            new Date().getTime();
          this.authService.setLogoutTimer(expirationDuration);

          return AuthActions.authenticateSuccess({
            email: loadedUser.email,
            username: loadedUser.username,
            userId: loadedUser.id,
            portraitImg: loadedUser.portraitImg,
            token: loadedUser.token,
            expirationDate: new Date(userData._tokenExpirationDate),
            redirect: false
          });

        }
        return { type: 'DUMMY' };
      })
    );
  })

  authLogout=createEffect(()=>{
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.authService.clearLogoutTimer();
        localStorage.removeItem('userData');
        this.router.navigate(['/auth']);
      })
    );
  },{dispatch:false})

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}
}
