import axios from 'axios';

export const fetchTrips = () => {
    return async dispatch => {
        showLoader(dispatch);

        setTimeout(() => {
            hideLoader(dispatch);
        }, 1000);
    }
}

const showLoader = (dispatch) => {
    dispatch({
        type: set_loader_visibility,
        payload: true
    });
}

const hideLoader = (dispatch) => {
    dispatch({
        type: set_loader_visibility,
        payload: false
    });
}
