import * as AuthActions from './Authenticate/AuthenticateActions';
import  * as AuthTypes from './Authenticate/AuthenticateType';
export const REQUEST_CUR_USER = `REQUEST_CUR_USER`;
export const SET_STATE = `SET_STATE`;

export const requestCurUser = (curUser)=>({
    type:REQUEST_CUR_USER,
    curUser
});

export const setState = (status = AuthTypes.AUTHENTICATING, curUser)=>({
    type:SET_STATE,
    authenticated: status,
    curUser
});
