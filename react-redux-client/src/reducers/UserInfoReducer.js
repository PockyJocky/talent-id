import {ADD_USER} from "../Constant";

const initialState = {
    userInfo: {
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
                return {...state, userInfo: action.payload};
            default:
                return state
        }
}