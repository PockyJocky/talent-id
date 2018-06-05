import {ADD_INTEREST, UPDATE_INTEREST} from "../Constant"

import callApi from "../apiCaller";

export const addNewInterest = (interest, user) => {
    return async (dispatch) => {
        await dispatch(addInterest(interest));
        return callApi('interest/add', 'POST', { edipi: user.edipi, ...interest })
    }
};

export const update = (interest) => {
    return async (dispatch) => {
        await dispatch(updateInterest(interest));
    }
};


export const addInterest = (interest) => {
    return{
        type: ADD_INTEREST,
        interest
    }
};

export const updateInterest = (interest) => {
    return {
        type: UPDATE_INTEREST,
        interest
    }
};
