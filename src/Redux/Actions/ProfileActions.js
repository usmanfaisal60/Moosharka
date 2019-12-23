import constants from "../../constants";
import axios from 'axios';
import { Platform } from 'react-native';


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
            console.log(e);
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

export const setProfilePicture = (image, callbackSuccess, callbackFailiure) => {
    return async dispatch => {
        const formData = createImageFormData(image);

        axios.post(
            constants.url + '/user', formData,
            {
                headers: {
                    'Authorization': 'Bearer ' + constants.token
                }
            }).
            then(res => {
                console.log(res)
                callbackSuccess();
            }).catch(e => {
                console.log(e);
                callbackFailiure();
            });
    }
}

export const setUserDocument = (image, docName, callbackSuccess, callbackFailiure) => {
    return async dispatch => {
        const formData = createImageFormData(image, docName);

        console.log(formData);
        axios.post(
            constants.url + '/documents', formData,
            {
                headers: {
                    'Authorization': 'Bearer ' + constants.token
                }
            }).
            then(res => {
                console.log(res)
                callbackSuccess();
            }).catch(e => {
                console.log(e);
                callbackFailiure();
            });
    }
}

const createImageFormData = (photo, docName = 'avatar') => {
    const data = new FormData();

    data.append(docName, {
        name: photo.fileName,
        type: photo.type,
        uri: Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    return data;
};