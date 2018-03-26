import Reactotron from 'reactotron-react-native';
import axios from 'axios';

import { REQUEST_IS_LOADING, REQUEST_FETCH_DATA_SUCCESS, REQUEST_HAS_ERRORED, FILTER_BY_TYPE, GET_NEXT_PRAYER_REQUESTS_PAGE_FROM_API  } from 'appray/src/actions/types';  
import { APPRAY_API_URL } from 'appray/src/settings';
import { requestFetchDataSuccess, requestHasErrored, requestIsLoading } from 'appray/src/actions/prayerRequests';

initialState = {
    isLoading: true,
    items: [],
    all_items: [],
    hasErrored: false,
    type_filter: "",
    page: 0,
}
export default function prayerRequestReducer(state=initialState, action) {
    switch (action.type) {
        case REQUEST_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case REQUEST_FETCH_DATA_SUCCESS:
            return {
                ...state,
                items: action.items,
                all_items: action.items,
            };
        case REQUEST_HAS_ERRORED:
            return {
                ...state,
                hasErrored: action.hasErrored,
            };
        case FILTER_BY_TYPE:
            if (!action.text_filter) {
                return {
                    ...state,
                    items: state.all_items,
                };
            }
            const requests = state.all_items ? state.all_items.reduce(function (res, request) {
                if (request.type.toLowerCase().indexOf(action.text_filter.toLowerCase()) >= 0 || 
                request.description.toLowerCase().indexOf(action.text_filter.toLowerCase()) >= 0) {
                    res.push(request);
                }
                return res;
            }, []) : [];

            return {
                ...state,
                items: request,
            }
        case GET_NEXT_PRAYER_REQUESTS_PAGE_FROM_API:
            const next_page = state.page + 1;
            url = APPRAY_API_URL + '?page=' + next_page
            
            axios.get(url)
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(`An error occurred while requesting the API. Status: ${response.statusText}. Body: ${response.text()}`);
                }
                if (next_page === 1) {
                    action.dispatcher(requestIsLoading(false));
                }
                if (response.data) {
                    action.dispatcher(requestFetchDataSuccess(state.all_items.concat(response.data)));
                }
            })
            .catch((error) => {
                Reactotron.error(error);
                action.dispatcher(requestHasErrored(true));
            });

            return {
                ...state,
                page: next_page,
            }
        default:
            return state;
    }
}
