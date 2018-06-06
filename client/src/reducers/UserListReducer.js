import { UPDATE_LIST, ADD_TO_LIST } from "../Constant";

const initialState = [];

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TO_LIST:
            return [...state, action.user];
        case UPDATE_LIST:
            return action.list;
        default:
            return state
    }
}