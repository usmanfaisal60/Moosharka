import { combineReducers } from 'redux';
import login from './LoginReducers';
import loader from './LoaderReducers';
import search from './SearchReducers';
import trips from './TripsReducers';
import profile from './ProfileReducers';
import listCar from './ListCarReducers';



export default combineReducers({
    login,
    loader,
    search,
    trips,
    profile,
    listCar
});