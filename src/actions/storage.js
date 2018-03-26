import Reactotron from 'reactotron-react-native';

import { SET_APP_STORAGE, UPDATE_STORAGE_ITEM, DELETE_STORAGE_ITEM } from './types';

// Action creators:
export function setStorageActionCreator(storage) {
    return {
        type: SET_APP_STORAGE,
        storage,
    };
}

export function updateStorageItemActionCreator(key, data) {
    return {
        type: UPDATE_STORAGE_ITEM,
        key,
        data,
    };
}

export function deleteStorageItemActionCreator(key) {
    return {
        type: DELETE_STORAGE_ITEM,
        key,
    };
}

// Thunks:
export function setStorage(storage) {
    return (dispatch) => {
        dispatch(setStorageActionCreator(storage));
    };
};


export function updateStorageItem(key, data) {
    return (dispatch) => {
        dispatch(updateStorageItemActionCreator(key, data));
    };
};

export function deleteStorageItem(key) {
    return (dispatch) => {
        dispatch(deleteStorageItemActionCreator(key));
    };
};
