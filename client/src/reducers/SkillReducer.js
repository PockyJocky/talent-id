import { REPLACE_SKILL_LIST, ADD_TO_SKILL_LIST } from "../Constant";

const initialState = [];

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TO_SKILL_LIST:
            return state.filter( skill => skill.toLowerCase() === action.skill.toLowerCase()).length !== 0
                ? state
                : [...state, action.interest];
        case REPLACE_SKILL_LIST:
            return [ ...action.list ];
        default:
            return state
    }
}