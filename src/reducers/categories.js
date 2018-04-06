import axios from 'axios';

import { 
    SET_CATEGORIES_FROM_API,
    GET_CATEGORIES_FROM_API,
 } from 'appray/src/actions/types';  

import { APPRAY_API_CATEGORIES_URL } from 'appray/src/settings';
import { setAllCategoriesFromAPI } from 'appray/src/actions/categories';


const initialState = {
    availableCategories: [],
}
export default function categoriesReducer(state=initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES_FROM_API:
            return {
                ...state,
                availableCategories: action.categories,
            };
        case GET_CATEGORIES_FROM_API:
            url = APPRAY_API_CATEGORIES_URL
            
            axios.get(url)
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(`An error occurred while requesting the API. Status: ${response.statusText}. Body: ${response.text()}`);
                }
                if (response.data) {
                    action.dispatcher(setAllCategoriesFromAPI(response.data));
                }
            })
            .catch((error) => {
                Reactotron.error(error);
                action.dispatcher(requestHasErrored(true));
            });

            return {
                ...state,
            }
        default:
            return state;
    }
}
