import { createAction, props } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Login';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const SIGNUP_START = '[Auth] Signup Start';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const LOGOUT = '[Auth] Logout';


export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string}>()
);

  
export const authenticateSuccess = createAction(
  AUTHENTICATE_SUCCESS,
  props<{      
    email: string;
    username: string;
    userId: string;
    portraitImg: string;
    token: string;
    expirationDate: Date;
    redirect: boolean;
  }>()
);

export const authenticateFail = createAction(
  AUTHENTICATE_FAIL,
  props<{errorMesseage: string}>()
);
  
export const signupStart = createAction(
  SIGNUP_START,
  props<{
    firstName: string;
    lastName: string;
    email: string; 
    password: string;
  }>()
);

export const clearError = createAction(
  CLEAR_ERROR
);

export const autoLogin = createAction(
  AUTO_LOGIN
);

export const logout = createAction(
  LOGOUT
);