import { REPLACE_USER_LIST, ADD_TO_USER_LIST } from "../Constant";

const initialState = [];

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TO_USER_LIST:
            return [...state, action.user];
        case REPLACE_USER_LIST:
            return [ ...action.list ];
        default:
            return state
    }
}