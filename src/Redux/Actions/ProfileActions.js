import constants from "../../constants";
import axios from 'axios';


const {
    set_loader_visibility,
    set_user_profile,
    set_user_favourites
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

export const fetchUserFavourites = () => {
    return async dispatch => {
        dispatch({
            type: set_user_favourites,
            payload: null
        });
        showLoader(dispatch);
        try {
            const userDetail = await axios.get(constants.url + '/user-favorites', {
                headers: {
                    'Authorization': 'Bearer ' + constants.token
                }
            });

            dispatch({
                type: set_user_favourites,
                payload: userDetail.data
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

export const setUserProfile = (object, callbackSuccess, callbackFailiure) => {
    return async dispatch => {
        try {
            const formData = makeFormData(object);
            console.log(formData);
            const result = await axios.post(constants.url + '/user',
                formData,
                {
                    headers: {
                        'Authorization': 'Bearer ' + constants.token
                    }
                });
            console.log(result);
            callbackSuccess();
        }
        catch (e) {
            callbackFailiure();
        }
    }
}

const makeFormData = obj => {
    const formData = new FormData();

    for (let key in obj) {
        formData.append(`${key}`, obj[key]);
    }

    return formData;
}

export const setProfilePicture = image => {
    return async dispatch => {
        console.log(image);

        let body = new FormData();
        body.append('photo', image);
        body.append('Content-Type', 'image/jpg');

        fetch(constants.url + '/user', {
            method: 'POST', headers: {
                "Content-Type": "multipart/form-data",
                "otherHeader": "foo",
                'Authorization': 'Bearer ' + constants.token
            }, body: body
        })
            .then((res) => {
                console.log('image uploaded')
                console.log(res);
            })
            .catch((e) => console.log(e))
    }
}