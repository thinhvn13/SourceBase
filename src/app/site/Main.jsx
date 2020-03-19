import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { history } from '../store/history';
import { AuthenticatePageContainer } from './pages/Authenticate/index';
import { HomePageContainer } from './pages/Home/index';
import {store} from './../store/index';
import * as mutations from './../store/action/mutations'

const InitialStore = (state)=>{
    console.log(state.getState())
    var token = localStorage.getItem('UserKey')
    var authenticated = state.getState().Authenticate.authenticated
    var curUser = state.getState().Authenticate.curUser
    if ((token != null) && ((authenticated === null) || (authenticated === `NOT_AUTHENTICATED`)))
    {
        curUser.set_header()
        state.dispatch(mutations.requestCurUser(curUser))
    }

    return store
}

export const Main = () => {
    return (
        <Router history={history}>
            <Provider store={InitialStore(store)}>
                <>
                    <Route exact path="/" component={HomePageContainer} />:
                    <Route exact path="/login" component={AuthenticatePageContainer} />:
                </>
            </Provider>
        </Router>
    )
}