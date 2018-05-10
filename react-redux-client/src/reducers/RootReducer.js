import {combineReducers} from 'redux'
import {interestCard} from "./InterestCardReducer";
import {userCard} from "./UserInfoReducer";

const rootReducer = combineReducers({
    interestCard,
    userCard
})

export default rootReducer