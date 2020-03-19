import {
    take,
    put,
    select,
    all,
} from 'redux-saga/effects';
import * as mutations from '../action/mutations';
import * as Authtypes from './../action/Authenticate/AuthenticateType'
import {userAuthenticationSaga, userRegisterSaga} from './AuthenticateSaga/AuthenticateSaga';

// const url=process.env.NODE_ENV ==`production`? `` : "http://localhost:5001";

function* initState(){

    while (true){
        const {user} = yield take(mutations.REQUEST_CUR_USER);
        try {
            // const {data} = yield user.get(url + `/users/1`);
            // if(!data){
            //     throw new Error();
            // }
            yield put(mutations.setState(Authtypes.AUTHENTICATED, user));
        } catch (e) {
            /* catch block handles failed login */
            localStorage.removeItem('UserKey')
            yield put(mutations.setState(Authtypes.NOT_AUTHENTICATED, user));
        }
    }
}

export default function* rootSages(){
    yield all([
        initState(),
        userAuthenticationSaga(),
        userRegisterSaga()
      ])
}