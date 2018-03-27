import { GET_USER_PROFILE_FROM_API, GET_LOGGED_USER_PROFILE_FROM_API, REQUEST_FETCH_USER_PROFILE_DATA_SUCCESS } from './types';

// Action creators:

export const getCurrentUserFromAPI = (userId, dispatcher) => {
    return {
        type: GET_USER_PROFILE_FROM_API,
        userId: userId,
        dispatcher,
    }
};

export const getCurrentLoggedUserFromAPI = (userId, dispatcher) => {
    return {
        type: GET_LOGGED_USER_PROFILE_FROM_API,
        userId: userId,
        dispatcher,
    }
};

export const updateUserProfileState = (userProfile) => {
    return {
        type: REQUEST_FETCH_USER_PROFILE_DATA_SUCCESS,
        userProfile,
    }
};


export const updateMyUserProfileState = (myUserProfile) => {
    return {
        type: REQUEST_FETCH_USER_PROFILE_DATA_SUCCESS,
        myUserProfile,
    }
};

// Thunks:
export function getUserFromAPI(userId) {
    return (dispatch) => {
        dispatch(getCurrentUserFromAPI(userId, dispatch));
    };
};

export function getLoggedUserFromAPI(userId) {
    return (dispatch) => {
        dispatch(getCurrentLoggedUserFromAPI(userId, dispatch));
    };
};
