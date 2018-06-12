import { ADD_INTEREST, UPDATE_INTEREST } from "../Constant"

import callApi from "../apiCaller";
import { addToInterestList } from "./InterestListActions";

export const addNewInterest = (interest, user) => {
    return async (dispatch) => {
        await dispatch(addInterest(interest));
        await dispatch(addToInterestList(interest));
        console.log("Posted Interest")
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
