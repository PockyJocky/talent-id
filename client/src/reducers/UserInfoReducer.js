import {UPDATE_USER, ADD_USER, GET_USERS} from "../Constant";

const initialState = {
    user: {
        firstName: '',
        lastName: '',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    }
};

export function userCard(state = initialState , action){
    switch(action.type){
        case UPDATE_USER:
            return{
                ...state = ( Object.assign({}, action.user))
            };
        case ADD_USER:
            return{
                ...state = ( Object.assign({}, action.user))
            };
        case GET_USERS:
            return{
                ...state = ( Object.assign({}, action.users))
            }
        default:
            return state
        }
}