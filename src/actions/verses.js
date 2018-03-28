import { GET_HELPFUL_VERSES_FROM_API, REQUEST_FETCH_USEFUL_VERSES_DATA_SUCCESS } from './types';

// Action creators:


export const getHelpfulVersesByTypeFromAPI = (prayerRequestType, dispatcher) => {
    return {
        type: GET_HELPFUL_VERSES_FROM_API,
        prayerRequestType,
        dispatcher,
    }
};

export const updateHelpfulVersesState = (helpfulVerses) => {
    return {
        type: REQUEST_FETCH_USEFUL_VERSES_DATA_SUCCESS,
        helpfulVerses,
    }
};

// Thunks:
export function getHelpfulVersesFromAPI(prayerRequestType) {
    return (dispatch) => {
        dispatch(getHelpfulVersesByTypeFromAPI(prayerRequestType, dispatch));
    };
};

