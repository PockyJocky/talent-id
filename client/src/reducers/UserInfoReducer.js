import {ADD_USER} from "../Constant";

const initialState = {
    user: {
        firstName: '',
        lastName: '',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    }
};

export function userCard(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                user:null,
                isFetching: false,
                error: null,
                successMsg:null,
                newUser: action.user
            };
        case 'ADD_NEW_USER_REQUEST_FAILED':
            return {
                ...state,
                error: action.error,
                user:null,
                isFetching: true,
                successMsg:null,
                newUser: action.user
            };
        case 'ADD_NEW_USER_REQUEST_SUCCESS':
            return {
                ...state,
                successMsg:action.message,
                user:null,
                isFetching: true,
                error: null,
                newUser: action.user
            };
            default:
                return state
        }
}