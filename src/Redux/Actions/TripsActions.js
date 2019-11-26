import axios from 'axios';
import constants from '../../constants';


const {
    set_activity_loader,
    set_booked_loader,
    set_history_loader,
    set_history,
    set_activity,
    set_booked,

} = constants.red_types;


export const fetchTripsHistory = () => {
    return async dispatch => {

        showHistoryLoader(dispatch);
        try {
            const result = await axios.get(constants.url + '/booking-history', {
                headers: {
                    'Authorization': 'Bearer ' + constants.token
                }
            });

            console.log(result.data);

            dispatch({
                type: set_history,
                payload: result.data
            })
        } catch (e) {
            console.log(e);
        }
        hideHistoryLoader(dispatch);
    }
}

const showHistoryLoader = dispatch => {
    return dispatch({
        type: set_history_loader,
        payload: true
    });
}

const showActivityLoader = dispatch => {
    return dispatch({
        type: set_activity_loader,
        payload: true
    });
}

const showBookedLoader = dispatch => {
    return dispatch({
        type: set_booked_loader,
        payload: true
    });
}

const hideHistoryLoader = dispatch => {
    return dispatch({
        type: set_history_loader,
        payload: false
    });
}

const hideActivityLoader = dispatch => {
    return dispatch({
        type: set_activity_loader,
        payload: false
    });
}

const hideBookedLoader = dispatch => {
    return dispatch({
        type: set_booked_loader,
        payload: false
    });
}



