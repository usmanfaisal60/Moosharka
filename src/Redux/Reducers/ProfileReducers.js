import constants from "../../constants";

const initial_state = {
    userProfile: null,
    userFavourites: null
}
const {
    set_user_profile,
    set_user_favourites
} = constants.red_types;

export default (state = initial_state, action) => {
    switch (action.type) {
        case set_user_profile:
            return {
                ...state, userProfile: action.payload
            }
        case set_user_favourites:
            return {
                ...state, userFavourites: action.payload
            }
        default:
            return state;
    }
}