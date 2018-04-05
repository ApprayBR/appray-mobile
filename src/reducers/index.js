import { combineReducers } from 'redux';

import authReducer from './auth';
import loginReducer from './login';
import prayerRequestReducer from './prayerRequests';
import navigatorReducer from './navigator';
import storageReducer from './storage';
import userReducer from './user';
import versesReducer from './verses';
import categoriesReducer from './categories';

const AppReducer = combineReducers({
    login: loginReducer,
    requests: prayerRequestReducer,
    nav: navigatorReducer,
    appStorage: storageReducer,
    user: userReducer,
    verses: versesReducer,
    categories: categoriesReducer,
});

export default AppReducer;
