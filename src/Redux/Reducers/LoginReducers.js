import constants from '../../constants';

const initial_state = {
    username: '',
    password: '',
    cPassword: '',
    loginStatus: true,
    signupStatus: false,
    loginOrSignupCrossAction: null,
    phoneNum: '',
    email: ''
}

const {
    set_confirm_pass,
    set_user,
    set_pass,
    set_login,
    reset_login,
    set_login_or_signup_cross_action,
    set_signup,
    set_phnum,
    set_email
} = constants.red_types

const login = (state = initial_state, action) => {
    switch (action.type) {
        case set_email:
            return {
                ...state, email: action.payload
            }
        case set_pass:
            return {
                ...state, password: action.payload
            }
        case set_confirm_pass:
            return {
                ...state, cPassword: action.payload
            }
        case set_user:
            return {
                ...state, username: action.payload
            }
        case set_phnum:
            return {
                ...state, phoneNum: action.payload
            }
        case set_login:
            return {
                ...state, loginStatus: action.payload
            }
        case set_signup:
            return {
                ...state, signupStatus: action.payload
            }
        case set_login_or_signup_cross_action:
            return {
                ...state, loginOrSignupCrossAction: action.payload
            }
        case reset_login:
            return { ...initial_state, loginOrSignupCrossAction: state.loginOrSignupCrossAction, loginStatus: state.loginStatus };
        default:
            return state;
    }
};

export default login;