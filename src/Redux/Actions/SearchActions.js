import axios from 'axios';
import constants from '../../constants';

const {
    set_loader_visibility,
    set_error,
    set_toplocations,
    set_search_keyword
} = constants.red_types;

export const fetchTopLocations = () => {
    return async dispatch => {
        dispatch({
            type: set_error,
            payload: false
        });

        dispatch({
            type: set_loader_visibility,
            payload: true
        });
        let toplocations;
        try {
            toplocations = await axios({
                method: 'GET',
                url: `${constants.url}/topLocations.json`,
                timeout: constants.requestTimeouts
            });

        } catch (e) {
            console.log(e);
            dispatch({
                type: set_loader_visibility,
                payload: false
            });

            if (!toplocations) {

                dispatch({
                    type: set_error,
                    payload: true
                });
                return;
            }
        }

        dispatch({
            type: set_loader_visibility,
            payload: false
        });

        dispatch({
            type: set_toplocations,
            payload: toplocations.data.top_locations
        });
    }
}

export const searchKeyWord = keyword => {
    return async dispatch => {
        dispatch({
            type: set_loader_visibility,
            payload: true
        });

        const searchResults = await axios({
            method: 'GET',
            url: `${constants.url}/search.json`,
            timeout
        });

        if (!searchResults) return;

        console.log(searchResults);
    }
}

export const setSearchKeyWord = keyword => {
    return {
        type: set_search_keyword,
        payload: keyword
    }
}