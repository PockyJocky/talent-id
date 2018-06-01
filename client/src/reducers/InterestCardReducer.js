import {ADD_INTEREST, UPDATE_INTEREST} from "../Constant";

const initialState = {
    skillList: []
};

export function interestCard(state = initialState, action){
    switch(action.type){
        case ADD_INTEREST:
            return {
                ...state,
                skillList: [...state.skillList, action.interest]
            };
        case UPDATE_INTEREST:
            return {
                ...state = (Object.assign({}, action.interest))
            };
        // case INPUT_ALL_INTERESTS:
        //     return{
        //         ...state,
        //         skillList: action.interestList
        //     }
        default:
            return state
    }
}