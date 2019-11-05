import constants from "../../constants"
import Axios from "axios";



export const setCredentials = (type, payload) => {
    return {
        type,
        payload
    }
}

const {
    reset_login,
    set_loader_visibility,
    set_error,
    set_login,
    set_login_or_signup_cross_action
} = constants.red_types;

export const resetLoginState = () => {
    return {
        type: reset_login,
        payload: null
    }
}

export const attemptLogin = (email, password) => {
    return async dispatch => {

        showLoader(dispatch);

        const formData = makeFormData({
            email,
            password,
        });

        console.log(formData);

        try {
            const result = await Axios.post(`${constants.url}/login`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                    }
                });

            hideLoader(dispatch);

            if (!result) return;

            await AsyncStorage

            if (result.data.success) {
                dispatch({
                    type: set_login,
                    payload: true
                });
            }

        }
        catch (e) {
            hideLoader(dispatch);
            if (e.message === 'Request failed with status code 401') {
                dispatch({
                    type: set_error,
                    payload: {
                        title: 'Credentials error',
                        message: 'Invalid email adress or wrong password. Please check your credentials or sign up to ejaroo'
                    }
                });
            } else {
                dispatch({
                    type: set_error,
                    payload: {
                        title: 'Network error',
                        message: 'It appears as if you do not have network access or our server is down.'
                    }
                });
            }
        }

    }
}

export const clearError = () => {
    return {
        type: set_error,
        payload: null
    }
}

export const attemptLogout = () => {
    return {
        type: set_login,
        payload: false
    };
}

export const setCrossListener = (payload) => {
    return {
        type: set_login_or_signup_cross_action,
        payload
    };
}

export const attemptSignup = (email, name, password, c_password) => {
    return async dispatch => {
        showLoader(dispatch);

        const formData = makeFormData({
            email,
            name,
            password,
            c_password
        });

        console.log(formData);

        try {
            const result = await Axios.post(`${constants.url}/register`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                    }
                });

            hideLoader(dispatch);

            if (!result) return;

            dispatch({
                type: set_error,
                payload: {
                    title: 'Success',
                    message: 'A confirmation email has been sent to your email account. Please verify your email account to use ejaroo'
                }
            });

        }
        catch (e) {
            hideLoader(dispatch);
            console.log(e);
            if (e.message !== 'Network Error') {
                dispatch({
                    type: set_error,
                    payload: {
                        title: 'User registration failed',
                        message: 'Type your information correctly. If you are already registered to ejaroo, please login.'
                    }
                });
            } else {
                dispatch({
                    type: set_error,
                    payload: {
                        title: 'Network error',
                        message: 'It appears as if you do not have network access or our server is down.'
                    }
                });
            }
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

const showLoader = dispatch => {
    dispatch({
        type: set_loader_visibility,
        payload: true
    });
}

const hideLoader = dispatch => {
    dispatch({
        type: set_loader_visibility,
        payload: false
    });
}