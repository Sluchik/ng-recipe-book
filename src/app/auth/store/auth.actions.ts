import {Actions} from '@ngrx/store';

export const SIGNUP = 'SINGUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class Singup implements Actions {
  readonly type = SIGNUP;
}

export class Singin implements Actions {
  readonly type = SIGNIN;
}

export class Logout implements Actions {
  readonly type = LOGOUT;
}

export class SetToken implements Actions {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {

  }
}

export type AuthActions = Singup | Singin | Logout | SetToken;
