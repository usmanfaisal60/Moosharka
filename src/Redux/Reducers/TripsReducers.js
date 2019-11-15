import constants from "../../constants"

const initial_state = {
    activity: [{ title: '', message: '' }],
    booked: [{ title: '', message: '' }],
    history: [{ title: '', message: '' }]
}

const {
    set_trips
} = constants.red_types;

const tripsReducers = (state = initial_state, action) => {
    switch (action.type) {
        case set_trips:
            return {
                ...state, trips: action.payload
            }
        default:
            return state;
    }
}

export default tripsReducers;