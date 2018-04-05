import { CHANGE_LOGIN_TEXT, } from 'appray/src/actions/types';  

const initialState = {
    availableCategories: ["Enfermidade", "Fé", "Financeiro", "Proteção" ],
}
export default function categoriesReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_LOGIN_TEXT:
            return {
                ...state,
                login: action.login,
            };
        default:
            return state;
    }
}
