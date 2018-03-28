import axios from 'axios';

import { GET_HELPFUL_VERSES_FROM_API, REQUEST_FETCH_USEFUL_VERSES_DATA_SUCCESS } from 'appray/src/actions/types';  
import { APPRAY_API_HELPFUL_VERSES_URL } from 'appray/src/settings';
import { getHelpfulVersesByTypeFromAPI, updateHelpfulVersesState } from 'appray/src/actions/verses';

const initialState = {
    helpfulVerses: {},
}

export default function versesReducer(state=initialState, action) {
    switch (action.type) {
        case REQUEST_FETCH_USEFUL_VERSES_DATA_SUCCESS:
            if (action.helpfulVerses) {
                return {
                    ...state,
                    helpfulVerses: action.helpfulVerses,
                };
            }

        case GET_HELPFUL_VERSES_FROM_API:
            const prayerRequestType = action.prayerRequestType;
            if (! prayerRequestType) {
                return state;
            }

            url = APPRAY_API_HELPFUL_VERSES_URL + '?type=' + prayerRequestType;

            axios.get(url)
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(`An error occurred while requesting the API. Status: ${response.statusText}. Body: ${response.text()}`);
                }
                if (response.data) {
                    action.dispatcher(updateHelpfulVersesState(response.data));
                }
            })
            .catch((error) => {
                Reactotron.error(error);
            });

            return state;

        default:
            return state;
    }
}
