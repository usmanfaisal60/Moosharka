import constants from '../../constants';
const initial_state = {
    loader: false,
    error: null,
    all_locationsError: null,
    activityLoader: false,
    historyLoader: false,
    bookingLoader: false
}

const {
    set_loader_visibility,
    reset_login,
    set_error,
    set_all_locations_error,

    set_activity_loader,
    set_booked_loader,
    set_history_loader
} = constants.red_types;

const loader = (state = initial_state, action) => {
    switch (action.type) {
        case set_loader_visibility:
            return {
                ...state, loader: action.payload
            }
        case set_activity_loader:
            return {
                ...state, activityLoader: action.payload
            }
        case set_booked_loader:
            return {
                ...state, bookingLoader: action.payload
            }
        case set_history_loader:
            return {
                ...state, historyLoader: action.payload
            }
        case set_error:
            return {
                ...state, error: action.payload
            }
        case set_all_locations_error:
            return {
                ...state, all_locationsError: action.payload
            }
        case reset_login:
            return initial_state;

        default:
            return state;
    }
}

export default loader;