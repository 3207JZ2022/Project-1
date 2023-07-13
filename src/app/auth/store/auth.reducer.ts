import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from 'src/app/account/firebaseUser.model';

export interface State {
  user: User|null;
  authError: string|null;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.authenticateSuccess, (state, {email, username, userId, portraitImg, token,expirationDate}) => ({
    ...state,
    authError: null,
    user: new User(
      email,
      username,
      userId,
      portraitImg,
      token,
      expirationDate
    ),
    loading: false
  })),

  on(AuthActions.logout, (state) => ({
    ...state,
    user: null
  })),

  on(AuthActions.loginStart,AuthActions.signupStart, (state) => ({
    ...state,
    authError: null,
    loading: true
  })),

  on(AuthActions.authenticateFail, (state, {errorMesseage}) => ({
    ...state,
    user: null,
    authError: errorMesseage,
    loading: false
  })),

  on(AuthActions.clearError, (state) => ({
    ...state,
    authError: null
  })),
);