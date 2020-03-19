import { combineReducers } from 'redux';
import Authenticate from './../reducer/Authenticate/AuthenticateReducer';

const rootReducer=combineReducers({
    Authenticate,
});

export default rootReducer;