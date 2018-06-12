import { UPDATE_INTEREST_LIST, ADD_TO_INTEREST_LIST } from "../Constant"

import callApi from '../apiCaller'

export const fetchInterestList = () => {
    return async function(dispatch) {
        let interests = await callApi('interest/getAll', 'GET');
        await dispatch(updateInterestList(interests));
        return interests;
    }
}

export const updateInterestList = list => ({ type: UPDATE_INTEREST_LIST, list });
export const addToInterestList = interest => ({ type: ADD_TO_INTEREST_LIST, interest });
