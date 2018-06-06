import {UPDATE_USER, ADD_USER, GET_USERS} from "../Constant";

const initialState = {
    user: {
        firstName: '',
        lastName: '',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    },
    users: []
};

export function userCard(state = initialState , action){
    switch(action.type){
        case UPDATE_USER:
            return {
                ...state,
                user: action.user
            };
        case ADD_USER:
            return {
                ...state,
                user: action.user,
                users: [ ...state.users, action.user ]
            };
        case GET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
        }
}