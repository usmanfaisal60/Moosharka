import { combineReducers } from 'redux';
import login from './LoginReducers';
import loader from './LoaderReducers';

export default combineReducers({
    login,
    loader
});