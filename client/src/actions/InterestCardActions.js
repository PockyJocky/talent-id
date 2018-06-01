import {ADD_INTEREST, UPDATE_INTEREST} from "../Constant"

import callApi from "../apiCaller";

export const addNewInterest = (interest, user) => {
    return async (dispatch) => {
        console.log(user)
        await dispatch(addInterest(interest));
        const newInterest = 'edipi=' + ((null != user.edipi) ? user.edipi : '')
                            + '&skillName=' + ((null != interest.skillName) ? interest.skillName : '')
                            + '&skillValue=' + ((null != interest.skillValue)? interest.skillValue : '')
                            + '&interestValue=' + ((null != interest.interestValue) ? interest.interestValue : '');
        return callApi('interest/add', 'POST', newInterest)
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
