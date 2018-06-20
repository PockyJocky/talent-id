import { REPLACE_SKILL_LIST, ADD_TO_SKILL_LIST } from "../Constant";

const initialState = [];

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TO_SKILL_LIST:
            const isUnique = state
                .filter( skill => skill.toLowerCase() === action.skill.toLowerCase())
                .length === 0;
            return isUnique
                ? [...state, action.skill]
                : state;
        case REPLACE_SKILL_LIST:
            return [ ...action.list ];
        default:
            return state
    }
}