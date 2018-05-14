import {ADD_INTEREST} from '../Constant'

export const addInterest = interest => ({
    type: ADD_INTEREST,
    payload: interest
})