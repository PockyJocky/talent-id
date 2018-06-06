import {UPDATE_USER, ADD_USER} from "../Constant";

const initialState =  {
    firstName: '',
    lastName: '',
    edipi: '',
    rank: 'AB',
    squadron: '13 IS'
};

export function userCard(state = initialState , action){
    switch(action.type){
        case UPDATE_USER:
            return action.user;
        case ADD_USER:
            return action.user;
        default:
            return state
        }
}