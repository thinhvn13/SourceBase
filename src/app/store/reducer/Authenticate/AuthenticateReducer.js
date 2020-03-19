import * as types from './../../action/Authenticate/AuthenticateType';
import * as mutations from './../../action/mutations';
import {defaultState} from './../../state/defaultState'

export default function AuthenticateReducer(state = defaultState.Authenticate, action){
    switch (action.type){
        case types.REQUEST_AUTHENTICATE_USER:
                return {...state, authenticated:types.AUTHENTICATING};
        case types.PROCESSING_AUTHENTICATE_USER:
                return {...state, curUser:action.curUser, authenticated:action.authenticated};
        case types.PROCESSING_REGISTER_USER:
                return {...state, authenticated:action.authenticated, msg:action.msg};
        case mutations.SET_STATE:
                return {...state, authenticated:action.authenticated};
        default:
            return state;
    }
}