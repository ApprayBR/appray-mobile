import axios from 'axios';

import { 
    GET_USER_PROFILE_FROM_API,
    GET_LOGGED_USER_PROFILE_FROM_API,
    REQUEST_FETCH_USER_PROFILE_DATA_SUCCESS,
    GET_USERS_SHUFFLE_LIST_FROM_API,
    REQUEST_FETCH_USERS_SHUFFLE_LIST_DATA_SUCCESS
} from 'appray/src/actions/types';
import { APPRAY_API_USER_PROFILE_URL, APPRAY_API_LOGGED_USER_PROFILE_URL, APPRAY_API_USER_SHUFFLE_LIST_URL } from 'appray/src/settings';
import { updateUserProfileState, updateMyUserProfileState, updateUsersShuffleList } from 'appray/src/actions/user';

const initialState = {
    userProfile: {},
    myUserProfile: {},
    usersShuffleList: [],
}

export default function userReducer(state=initialState, action) {
    switch (action.type) {
        case REQUEST_FETCH_USER_PROFILE_DATA_SUCCESS:
            if (action.userProfile) {
                return {
                    ...state,
                    userProfile: action.userProfile,
                };
            }
            if (action.myUserProfile) {
                return {
                    ...state,
                    myUserProfile: action.myUserProfile,
                };
            }

        case GET_USER_PROFILE_FROM_API:
            const userId = action.userId;
            if (! userId) {
                return state;
            }

            url = APPRAY_API_USER_PROFILE_URL + '?user_id=' + userId;

            axios.get(url)
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(`An error occurred while requesting the API. Status: ${response.statusText}. Body: ${response.text()}`);
                }
                if (response.data) {
                    action.dispatcher(updateUserProfileState(response.data));
                }
            })
            .catch((error) => {
                Reactotron.error(error);
                action.dispatcher(requestHasErrored(true));
            });

            return state;
        
        case GET_LOGGED_USER_PROFILE_FROM_API:
            const loggedUserId = action.userId;
            if (! loggedUserId) {
                return state;
            }

            url = APPRAY_API_LOGGED_USER_PROFILE_URL + '?user_id=' + loggedUserId;

            axios.get(url)
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(`An error occurred while requesting the API. Status: ${response.statusText}. Body: ${response.text()}`);
                }
                if (response.data) {
                    action.dispatcher(updateMyUserProfileState(response.data));
                }
            })
            .catch((error) => {
                Reactotron.error(error);
                action.dispatcher(requestHasErrored(true));
            });

            return state;
        
        case GET_USERS_SHUFFLE_LIST_FROM_API:
            url = APPRAY_API_USER_SHUFFLE_LIST_URL;

            axios.get(url)
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(`An error occurred while requesting the API. Status: ${response.statusText}. Body: ${response.text()}`);
                }
                if (response.data) {
                    action.dispatcher(updateUsersShuffleList(response.data));
                }
            })
            .catch((error) => {
                Reactotron.error(error);
                action.dispatcher(requestHasErrored(true));
            });

            return state;
        
        case REQUEST_FETCH_USERS_SHUFFLE_LIST_DATA_SUCCESS:
            if (action.usersShuffleList) {
                return {
                    ...state,
                    usersShuffleList: action.usersShuffleList,
                };
            }
        default:
            return state;
    }
}
