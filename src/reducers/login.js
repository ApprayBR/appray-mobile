import { CHANGE_LOGIN_TEXT, CHANGE_PASSWORD_TEXT } from 'appray/src/actions/types';  

initialState = {
    login: '',
    password: '',
    isLoggedIn: false,
}
export default function loginReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_LOGIN_TEXT:
            return {
                ...state,
                login: action.login,
            };
        case CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.password,
            };
        default:
            return state;
    }
}
