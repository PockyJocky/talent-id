import {ADD_USER} from '../Constant'
import callApi from '../apiCaller'

export const addUser = (user) => {console.log(user)
        return (dispatch) => {
            const newUser = {
                firstName: user.firstName || ' ',
                lastName: user.lastName || ' ',
                edipi: user.edipi || ' ',
                rank: user.rank || ' ',
                squadron: user.squadron || ' ',

            };
            return callApi('addUser', 'post', {
                user: newUser,
            }).then(res => dispatch(addUser(res.user)));
        };
};
export const addUserInfoRequest = (user) => {
    return {
        type: ADD_USER,
        body: user
    }
};
export const addUserInfoRequestSuccess = (user,message) => {
    return {
        type: 'ADD_NEW_USER_REQUEST_SUCCESS',
        body:user,
        message:message
    }
};
export const addUserInfoRequestFailed = (error) => {
    return {
        type: 'ADD_NEW_USER_REQUEST_FAILED',
        error
    }
};