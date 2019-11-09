import constants from '../../constants';
const initial_state = {
    topLocations: null,
    keyword: '',
    id: null,
    searchResults: null
}

const {
    set_toplocations,
    set_search_keyword,
    set_search_results,
    set_search_id
} = constants.red_types;

const loader = (state = initial_state, action) => {
    switch (action.type) {
        case set_toplocations:
            return {
                ...state, topLocations: action.payload
            }
        case set_search_keyword:
            return {
                ...state, keyword: action.payload
            }
        case set_search_id:
            return {
                ...state, id: action.payload
            }
        case set_search_results:
            return {
                ...state, searchResults: action.payload
            }
        default:
            return state;
    }
}

export default loader;