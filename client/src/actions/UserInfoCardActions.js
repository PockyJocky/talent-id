import {ADD_USER} from '../Constant'
import callApi from '../apiCaller'

export const addUser = (user) => {console.log(user)
        return (dispatch) => {
            return callApi('posts', 'post', {
                body: {
                    firstName: user.firstName.string,
                    lastName: user.lastName.string,
                    edipi: user.edipi.string,
                    rank: user.rank.string,
                    squadron: user.squadron.string
                },
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