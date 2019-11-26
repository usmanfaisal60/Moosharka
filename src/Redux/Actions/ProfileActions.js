import constants from "../../constants";
import axios from 'axios';


const {
    set_loader_visibility,
    set_user_profile
} = constants.red_types;


export const fetchUserProfile = () => {
    return async dispatch => {
        dispatch({
            type: set_user_profile,
            payload: null
        });
        showLoader(dispatch);
        try {
            const userDetail = await axios.get(constants.url + '/user-detail', {
                headers: {
                    'Authorization': 'Bearer ' + constants.token
                }
            });

            dispatch({
                type: set_user_profile,
                payload: userDetail.data.success
            });

        } catch (e) {
            console.log(e);
        }
        hideLoader(dispatch);
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
