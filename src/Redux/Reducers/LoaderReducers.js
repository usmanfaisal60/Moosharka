import constants from '../../constants';
const initial_state = {
    loader: false,
    loaderSize: 'small'
}

const {
    set_loader_size,
    set_loader_visibility,
    reset_login
} = constants.red_types;

const loader = (state = initial_state, action) => {
    switch (action.type) {
        case set_loader_size:
            return {
                ...state, loaderSize: action.payload
            }
        case set_loader_visibility:
            return {
                ...state, loader: action.payload
            }
        case reset_login:
            return initial_state;
        default:
            return state;
    }
}

export default loader;