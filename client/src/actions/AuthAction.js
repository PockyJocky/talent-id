import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER, TEST_DISPATCH } from './types.js';


// Register User
export const registerUser = (userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData
    };
    // return dispatch => {
    //     axios
    //         .post('/api/users/register', userData)
    //         .then(res => history.push('/show'))
    //         .catch(err =>
    //             dispatch({
    //                 type: GET_ERRORS,
    //                 payload: err.response.data
    //             })
    //         );
    // };
};

export const holdUserData = (userData) => {
    return {
            type: SET_CURRENT_USER,
            payload: userData.data
    };
};
