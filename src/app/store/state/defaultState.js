import md5 from 'md5';
import User from './../user/User';
import * as types from './../action/Authenticate/AuthenticateType'

export const defaultState = {
    Authenticate : 
        {
            curUser: new User(null, `NULL`),
            authenticated: null,
            msg: 'error'    
        }
};