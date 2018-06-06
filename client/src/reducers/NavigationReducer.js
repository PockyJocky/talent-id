import { UPDATE_PLACE } from "../Constant";

const initialState = {
    place: 0
};

export default function(state = initialState, action){
    switch(action.type){
        case UPDATE_PLACE:
            return {
                ...state,
                place: action.place
            };
        default:
            return state
    }
}