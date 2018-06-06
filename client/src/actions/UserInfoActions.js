import { ADD_USER, UPDATE_USER, GET_USERS } from "../Constant";
import { addToList } from './UserListActions';

import callApi from '../apiCaller'

export const addNewUser = (user) => {
    return async (dispatch) => {
        await dispatch(addUser(user));
        await dispatch(addToList(user));
        return callApi('user/add', 'POST', user)
    }
};

// export const update = (user) => {
//     return async (dispatch) => {
//         await dispatch(updateUser(user));
//         // Should update user on server?
//     }
// };

//dispatchs
export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
};

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
};