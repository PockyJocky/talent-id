import { UPDATE_USER_LIST, ADD_TO_USER_LIST } from "../Constant"

import callApi from '../apiCaller'

export const fetchUserList = () => {
    return async function(dispatch) {
        let users = await callApi('user/getAll', 'GET');
        await dispatch(updateUserList(users));
        return users;
    }
}

export const updateUserList = list => ({ type: UPDATE_USER_LIST, list });
export const addToUserList = user => ({ type: ADD_TO_USER_LIST, user });
