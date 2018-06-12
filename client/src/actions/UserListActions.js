import { UPDATE_LIST, ADD_TO_LIST } from "../Constant"

import callApi from '../apiCaller'

export const fetchUserList = () => {
    return async function(dispatch) {
        let users = await callApi('user/getAll', 'GET');
        await dispatch(updateList(users));
        return users;
    }
}

export const updateList = list => ({ type: UPDATE_LIST, list });
export const addToList = user => ({ type: ADD_TO_LIST, user });
