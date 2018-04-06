import { 
    SET_CATEGORIES_FROM_API,
    GET_CATEGORIES_FROM_API,
} from './types';

// Action creators:

export const setAllCategoriesFromAPI = (categories, dispatcher) => {
    return {
        type: SET_CATEGORIES_FROM_API,
        categories,
        dispatcher,
    }
};

export const getAllCategoriesFromAPI = (dispatcher) => {
    return {
        type: GET_CATEGORIES_FROM_API,
        dispatcher,
    }
};


// Thunks:
export function getCategoriesFromAPI() {
    return (dispatch) => {
        dispatch(getAllCategoriesFromAPI(dispatch));
    };
};
