import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types.js';

// Register User
export const registerUser = (userData, history) => {
    return dispatch => {
        axios
            .post('/api/users/register', userData)
            .then(res => history.push('/show'))
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    };
};

export const holdUserData = (userData) => {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_USER,
            payload: userData.data
        })
    };
};
