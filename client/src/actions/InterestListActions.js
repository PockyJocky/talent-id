import { UPDATE_LIST, ADD_TO_LIST } from "../Constant"

import callApi from '../apiCaller'

export const fetchInterestList = () => {
    return async function(dispatch) {
        let interests = await callApi('interest/getAll', 'GET');
        await dispatch(updateList(interests));
        return interests;
    }
}

export const updateList = list => ({ type: UPDATE_LIST, list });
export const addToList = interest => ({ type: ADD_TO_LIST, interest });
