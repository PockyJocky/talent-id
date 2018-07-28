import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER, TEST_DISPATCH } from '../actions/types';

const initialState = {
    isAuthenticated : false,
    user: {}
}

export default function(state = initialState, action){
    switch (action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}