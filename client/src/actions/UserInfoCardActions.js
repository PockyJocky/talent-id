import {ADD_USER} from '../Constant'
import callApi from '../apiCaller'

const apiUrl = "/api/addUser";

export const addUser = (user) => {console.log(user)
        return (dispatch) => {
            return callApi('posts', 'post', {
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    edipi: user.edipi,
                    rank: user.rank,
                    squadron: user.squadron
                },
            }).then(res => dispatch(addUser(res.user)));
        };
};
export const addUserInfoRequest = (user) => {
    return {
        type: ADD_USER,
        user
    }
};
export const addUserInfoRequestSuccess = (user,message) => {
    return {
        type: 'ADD_NEW_USER_REQUEST_SUCCESS',
        user:user,
        message:message
    }
};
export const addUserInfoRequestFailed = (error) => {
    return {
        type: 'ADD_NEW_USER_REQUEST_FAILED',
        error
    }
};