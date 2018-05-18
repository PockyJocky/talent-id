import {ADD_INTEREST} from "../Constant";
const initialState = {
    skillList: [{}]
}
export function interestCard(state = initialState, action){
    console.log(state)
    switch(action.type){
        case ADD_INTEREST:
            return {...state = ( Object.assign({}, action.payload))}
        default:
            return state
    }
}