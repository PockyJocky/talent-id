import {combineReducers} from 'redux'
import {interestCard} from "./InterestCardReducer";
import {userCard} from "./UserInfoReducer";
import userList from "./UserListReducer";
import interestList from "./InterestListReducer"

const rootReducer = combineReducers({
    interestCard,
    interestList,
    userCard,
    userList,
})

export default rootReducer