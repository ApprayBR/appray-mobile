import { combineReducers } from 'redux';

import authReducer from './auth';
import loginReducer from './login';
import prayerRequestReducer from './prayerRequests';
import navigatorReducer from './navigator';
import storageReducer from './storage';

const AppReducer = combineReducers({
    login: loginReducer,
    requests: prayerRequestReducer,
    nav: navigatorReducer,
    appStorage: storageReducer,
});

export default AppReducer;
