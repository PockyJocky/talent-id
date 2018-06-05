import {ADD_USER, UPDATE_USER, GET_USERS} from "../Constant";

import callApi from '../apiCaller'

export const addNewUser = (user) => {
    return async (dispatch) => {
        await dispatch(update(user));
        await dispatch(addUser(user));
        return callApi('user/add', 'POST', user)
    }
};

export const getUsers = () => {
    return async (dispatch) => {
        let users = await callApi('user/getAll', 'GET');
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