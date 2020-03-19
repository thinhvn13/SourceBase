import {
    take,
    put,
    select,
    all,
} from 'redux-saga/effects';
import * as actions from './../../action/Authenticate/AuthenticateActions'
import * as types from './../../action/Authenticate/AuthenticateType'
import Axios from 'axios';
import { history } from './../../history';

const url=process.env.NODE_ENV ==`production`? `` : "http://localhost:5001";

export function* userAuthenticationSaga(){
    while (true){
        const {phone, password} = yield take(types.REQUEST_AUTHENTICATE_USER);
        try {
            const { data } = yield Axios.post(url + `/users/authenticate`, {phone, password});
            if(!data){
                throw new Error();
            }
            yield put(actions.processAuthenticateUser(types.AUTHENTICATED, data['token']));
            localStorage.setItem('UserKey', data['token']);
            const curUser = yield select(actions.getCurUser);
            history.push(`/`);
        } catch (e) {
            /* catch block handles failed login */
            yield put(actions.processAuthenticateUser(types.NOT_AUTHENTICATED));
        }
    }
}

export function* userRegisterSaga(){
    while (true){
        const {firstName, lastName, username, phone, password, is_agree} = yield take(types.REQUEST_REGISTER_USER);
        try {
            const {data} = yield Axios.post(url + `/users/register`, {firstName, lastName, username, phone, password, is_agree});
            yield put(actions.processRegisterUser(types.REGISTER_SUCCESS, 'success'));
            history.push(`/login`);
        } catch (e) {
            /* catch block handles failed login */
            yield put(actions.processRegisterUser(types.REGISTER_FAIL, e.response.data.message));
        }
    }
}