import { combineReducers } from 'redux';
import login from './LoginReducers';
import loader from './LoaderReducers';
import search from './SearchReducers';
import trips from './TripsReducers';


export default combineReducers({
    login,
    loader,
    search,
    trips
});