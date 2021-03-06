import { 
    ALL_PRAYER_REQUESTS, 
    FILTER_BY_TEXT, 
    REQUEST_HAS_ERRORED, 
    REQUEST_IS_LOADING, 
    REQUEST_FETCH_DATA_SUCCESS, 
    GET_NEXT_PRAYER_REQUESTS_PAGE_FROM_API,
    GET_RECORDINGS_FOR_MY_PRAYER_REQUEST,
    SET_RECORDINGS_FOR_MY_PRAYER_REQUEST,
    GET_RECORDINGS_FOR_MY_PROFILE,
    SET_RECORDINGS_FOR_MY_PROFILE,
 } from './types';

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
        type: FILTER_BY_TEXT,
        text_filter: text,
    }
}

export const getNextPrayerRequestsPage = (dispatch) => {
    return {
        type: GET_NEXT_PRAYER_REQUESTS_PAGE_FROM_API,
        dispatcher: dispatch
    };
}

export const getRecordingsForPrayerRequest = (prayerRequestId, dispatch) => {
    return {
        type: GET_RECORDINGS_FOR_MY_PRAYER_REQUEST,
        dispatcher: dispatch,
        prayerRequestId,
    };
}

export const setRecordingsForPrayerRequest = (prayerRequestRecordings) => {
    return {
        type: SET_RECORDINGS_FOR_MY_PRAYER_REQUEST,
        prayerRequestRecordings,
    };
}

export const getRecordingsForProfile = (userId, dispatch) => {
    return {
        type: GET_RECORDINGS_FOR_MY_PROFILE,
        dispatcher: dispatch,
        userId,
    };
}

export const setRecordingsForProfile = (profileRecordings) => {
    return {
        type: SET_RECORDINGS_FOR_MY_PROFILE,
        profileRecordings,
    };
}

// Thunks:
export function fetchNextPrayerRequestsPageFromAPI() {
    return (dispatch) => {
        dispatch(getNextPrayerRequestsPage(dispatch));
    };
}

export function filterPrayerRequestsByText(text) {
    return (dispatch) => {
        dispatch(requestIsLoading(true));
        dispatch(filterPrayerRequests(text));
        dispatch(requestIsLoading(false));
    };
}

export function getRecordingsForMyPrayerRequest(prayerRequestId) {
    return (dispatch) => {
        dispatch(getRecordingsForPrayerRequest(prayerRequestId, dispatch));
    }
}


export function getRecordingsForMyProfile(userId) {
    return (dispatch) => {
        dispatch(getRecordingsForProfile(userId, dispatch));
    }
}