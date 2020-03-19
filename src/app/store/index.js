import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducer/index';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {defaultState} from './state/defaultState'
const sagaMiddleware  = createSagaMiddleware();
import rootSagas from './api/index'

export const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(createLogger(), sagaMiddleware)
  );

sagaMiddleware.run(rootSagas)
