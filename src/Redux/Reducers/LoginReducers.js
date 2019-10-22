import constants from '../../constants';

const initial_state = {
    username: 'user@email.com',
    password: 'password',
    loginStatus: false,
    loginOrSignupCrossAction: null
}

const {
    set_user,
    set_pass,
    set_login,
    reset_login,
    set_login_or_signup_cross_action
} = constants.red_types

const login = (state = initial_state, action) => {
    switch (action.type) {
        case set_pass:
            return {
                ...state, password: action.payload
            }
        case set_user:
            return {
                ...state, username: action.payload
            }
        case set_login:
            return {
                ...state, loginStatus: action.payload
            }
        case set_login_or_signup_cross_action: 
            return {
                ...state, loginOrSignupCrossAction: action.payload
            }
        case reset_login:
            return { ...initial_state, loginStatus: state.loginStatus };
        default:
            return state;
    }
};

export default login;