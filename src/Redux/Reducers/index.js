import { combineReducers } from 'redux';
import login from './LoginReducers';
import loader from './LoaderReducers';
import search from './SearchReducers';



export default combineReducers({
    login,
    loader,
    search
});