import axios from 'axios';
import constants from '../../constants';

const {
    set_loader_visibility,
    set_error,
    set_all_locations_error,
    set_toplocations,
    set_search_keyword,
    set_search_results,
    set_search_id
} = constants.red_types;

export const fetchTopLocations = () => {
    return async dispatch => {
        dispatch({
            type: set_all_locations_error,
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
                // url: `${constants.url}/topLocations.json`,
                url: `${constants.url}/all-locations`,
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
                    type: set_all_locations_error,
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
            payload: toplocations.data.result
        });
    }
}

export const searchCar = location_id => {
    return async dispatch => {
        dispatch({
            type: set_error,
            payload: false
        });

        dispatch({
            type: set_search_results,
            payload: null
        });

        showLoader(dispatch);

        try {
            const searchResults = await axios({
                method: 'GET',
                url: `${constants.url}/car`,
                timeout: constants.requestTimeouts,
                params: {
                    location_id
                }
            });

            hideLoader(dispatch);

            dispatch({
                type: set_search_results,
                payload: searchResults.data
            })
        } catch (e) {
            console.log(e);
            hideLoader(dispatch);
        }

    }
}

const showLoader = (dispatch) => {
    dispatch({
        type: set_loader_visibility,
        payload: true
    });
}

const hideLoader = (dispatch) => {
    dispatch({
        type: set_loader_visibility,
        payload: false
    });
}

export const setSearchKeyWord = keyword => {
    return {
        type: set_search_keyword,
        payload: keyword
    }
}

export const setSearchId = id => {
    return {
        type: set_search_id,
        payload: id
    }
}

export const clearSearchResults = () => {
    return {
        type: set_search_results,
        payload: null
    }
}

export const clearKeyword = () => {
    return {
        type: set_search_keyword,
        payload: ''
    }
}
