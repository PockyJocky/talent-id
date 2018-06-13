import { UPDATE_INTEREST_LIST, ADD_TO_INTEREST_LIST } from "../Constant";

const initialState = [];

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TO_INTEREST_LIST:
            return [...state, action.interest];
        case UPDATE_INTEREST_LIST:
            return [ ...action.list ];
        default:
            return state
    }
}