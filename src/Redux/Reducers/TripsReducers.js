import constants from "../../constants"

const initial_state = {
    trips: { mango: 1 }
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