import * as types from './AuthenticateType'
import User from './../../user/User'

export const requestAuthenticateUser = (phone, password)=>({
    type: types.REQUEST_AUTHENTICATE_USER,
    phone,
    password
});

export const processAuthenticateUser = (status = types.AUTHENTICATING, token)=>({
    type: types.PROCESSING_AUTHENTICATE_USER,
    curUser: new User(token, status),
    authenticated: status
});

export const getCurUser = (state) => state.Authenticate.curUser

export const requestRegisterUser = (firstName, lastName, username, phone, password, is_agree)=>({
    type: types.REQUEST_REGISTER_USER,
    firstName,
    lastName,
    username,
    phone,
    password,
    is_agree
});

export const processRegisterUser = (status = types.REGISTERING, msg)=>({
    type: types.PROCESSING_REGISTER_USER,
    msg: msg,
    authenticated: status
});
