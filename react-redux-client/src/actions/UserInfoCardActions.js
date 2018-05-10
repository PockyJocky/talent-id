import {ADD_USER} from '../Constant'

export const addUserInfo = info => ({
    type: ADD_USER,
    payload: info
})