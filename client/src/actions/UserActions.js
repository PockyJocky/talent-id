import {ADD_USER, UPDATE_USER, GET_USERS} from "../Constant";

import callApi from '../apiCaller'

export const addNewUser = (user) => {
    return async (dispatch) => {
        await dispatch(update(user));
        await dispatch(addUser(user));
        const newUser =
            'firstName=' + ((null != user.firstName) ? user.firstName : '')
            + '&lastName=' + ((null != user.lastName) ? user.lastName : '')
            + '&edipi=' + ((null != user.edipi) ? user.edipi : '')
            + '&rank=' + ((null != user.rank) ? user.rank : '')
            + '&squadron=' + ((null != user.squadron) ? user.squadron : '');
        return callApi('user/add', 'POST', newUser)
    }
};

export const getUsers = () => {
    return async (dispatch) => {
        let users = [];
        console.log(await callApi('user/getAll', 'GET'));
        await dispatch(getAllUsers(users));
        return users
    }
};

export const update = (user) => {
    return async (dispatch) => {
        await dispatch(updateUser(user));
    }
};

//dispatchs
export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
};

export const getAllUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
};

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
};