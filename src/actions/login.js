import Reactotron from 'reactotron-react-native';
import { AccessToken } from 'react-native-fbsdk';

import { CHANGE_LOGIN_TEXT, CHANGE_PASSWORD_TEXT } from './types';
import { updateStorageItem, deleteStorageItem } from 'appray/src/actions/storage';
import { LOGIN_STATE_KEY } from 'appray/src/settings';

// Action creators:
export function setLoginText(text) {
    return {
        type: CHANGE_LOGIN_TEXT,
        login: text
    };
}

export function setPasswordText(text) {
    return {
        type: CHANGE_PASSWORD_TEXT,
        password: text
    };
}


// Thunks:
export function setLogin(text) {
    return (dispatch) => {
        dispatch(setLoginText(text));
    };
};

export function setPassword(text) {
    return (dispatch) => {
        dispatch(setPasswordText(text));
    };
};

export function loginWithFacebook(navigation) {
    return (dispatch) => {
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                dispatch(
                    updateStorageItem(LOGIN_STATE_KEY, 
                    { 
                        from: 'Facebook',
                        token: data
                    })
                );
            }
        );
        navigation.navigate('Main', {});
    };
};

export function logout(navigation, destinity) {
    return (dispatch) => {
        dispatch(deleteStorageItem(LOGIN_STATE_KEY)); // Remove token from local storage
        AccessToken.setCurrentAccessToken(null); // Set token as invalid on FBSDK (if any)
        
        navigation.dispatch({ type: 'Logout', destinity }); // Redirects user to the desired destiny screen
    };
};