import { ALL_PRAYER_REQUESTS, FILTER_BY_TITLE, REQUEST_HAS_ERRORED, REQUEST_IS_LOADING, REQUEST_FETCH_DATA_SUCCESS, GET_NEXT_PRAYER_REQUESTS_PAGE_FROM_API } from './types';
import { APPRAY_API_URL } from 'appray/src/settings';

// Action creators:
export function requestIsLoading(bool) {
    return {
        type: REQUEST_IS_LOADING,
        isLoading: bool
    };
}

export function requestFetchDataSuccess(items) {
    return {
        type: REQUEST_FETCH_DATA_SUCCESS,
        items
    };
}

export function requestHasErrored(bool) {
    return {
        type: REQUEST_HAS_ERRORED,
        hasErrored: bool
    };
}

export const filterPrayerRequests = (text) => {
    return {
        type: FILTER_BY_TITLE,
        text_filter: text,
    }
};

export const getNextPrayerRequestsPage = (dispatch) => {
    return {
        type: GET_NEXT_PRAYER_REQUESTS_PAGE_FROM_API,
        dispatcher: dispatch
    };
}

// Thunks:
export function fetchNextPrayerRequestsPageFromAPI() {
    return (dispatch) => {
        dispatch(getNextPrayerRequestsPage(dispatch));
    };
};

export function filterPrayerRequestsByText(text) {
    return (dispatch) => {
        dispatch(requestIsLoading(true));
        dispatch(filterPrayerRequests(text));
        dispatch(requestIsLoading(false));
    };
};
