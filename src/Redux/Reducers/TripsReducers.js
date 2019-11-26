import constants from "../../constants"

const initial_state = {
    activity: null,
    booked: null,
    history: null
}

const {
    set_history,
    set_activity,
    set_booked,
} = constants.red_types;

const tripsReducers = (state = initial_state, action) => {
    switch (action.type) {
        case set_history:
            return {
                ...state, history: action.payload
            }
        case set_activity:
            return {
                ...state, activity: action.payload
            }
        case set_booked:
            return {
                ...state, booked: action.payload
            }
        default:
            return state;
    }
}

export default tripsReducers;