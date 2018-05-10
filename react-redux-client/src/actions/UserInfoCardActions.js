import {ADD_USER} from '../Constant'

const apiUrl = "/api/";

export const addUserInfo = (user) => {console.log(user)
    return (dispatch) => {
        dispatch(addUserInfoRequest(user));
        return fetch(apiUrl, {
            method:'post',
            //  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: user,
        }).then(response => {
            if(response.ok){
                response.json().then(data => {
                    dispatch(addUserInfoRequestSuccess(data.user[0], data.message))
                })
            }
            else{
                response.json().then(error => {
                    dispatch(addUserInfoRequestFailed(error))
                })
            }
        })
    }
}
export const addUserInfoRequest = (user) => {
    return {
        type: ADD_USER,
        user
    }
}
export const addUserInfoRequestSuccess = (user,message) => {
    return {
        type: 'ADD_NEW_USER_REQUEST_SUCCESS',
        user:user,
        message:message
    }
}
export const addUserInfoRequestFailed = (error) => {
    return {
        type: 'ADD_NEW_USER_REQUEST_FAILED',
        error
    }
}