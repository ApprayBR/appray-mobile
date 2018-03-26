import { SET_APP_STORAGE, UPDATE_STORAGE_ITEM, DELETE_STORAGE_ITEM } from 'appray/src/actions/types';  

export default function storageReducer(state={}, action) {
    switch (action.type) {
        case SET_APP_STORAGE:
            return {
                ...state,
                storage: action.storage,
            };
        case UPDATE_STORAGE_ITEM:
            state.storage.save({
                key: action.key,
                data: action.data,
            });
            return state;
        case DELETE_STORAGE_ITEM:
            state.storage.remove({
                key: action.key,
            });
            return state;
        default:
            return state;
    }
}
