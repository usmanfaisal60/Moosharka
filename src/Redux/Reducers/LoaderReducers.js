import constants from '../../constants';
const initial_state = {
    loader: false,
    error: null
}

const {
    set_loader_visibility,
    reset_login,
    set_error
} = constants.red_types;

const loader = (state = initial_state, action) => {
    switch (action.type) {
        case set_loader_visibility:
            return {
                ...state, loader: action.payload
            }
        case set_error:
            return {
                ...state, error: action.payload
            }
        case reset_login:
            return initial_state;

        default:
            return state;
    }
}

export default loader;