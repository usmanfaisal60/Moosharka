import constants from "../../constants"

export const setCredentials = (type, payload) => {
    return {
        type,
        payload
    }
}

const {
    reset_login,
    set_loader_visibility,
    set_signup,
    set_login,
    set_login_or_signup_cross_action
} = constants.red_types;

export const resetLoginState = () => {
    return {
        type: reset_login,
        payload: null
    }
}

export const attemptLogin = (username, password) => {
    return dispatch => {
        dispatch({
            type: set_loader_visibility,
            payload: true
        });

        setTimeout(() => {
            dispatch({
                type: set_loader_visibility,
                payload: false
            });

            dispatch({
                type: set_login,
                payload: true
            });


        }, 1000);
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

export const attemptSignup = (username, password) => {
    return dispatch => {
        dispatch({
            type: set_loader_visibility,
            payload: true
        });

        setTimeout(() => {
            dispatch({
                type: set_loader_visibility,
                payload: false
            });

            dispatch({
                type: set_signup,
                payload: true
            });


        }, 1000);
    }
}