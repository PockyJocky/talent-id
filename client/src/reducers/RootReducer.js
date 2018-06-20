import {combineReducers} from 'redux'
<<<<<<< HEAD
import users from "./UserReducer";
import skills from "./SkillReducer"

const rootReducer = combineReducers({
    users,
    skills,
=======
import {interestCard} from "./InterestCardReducer";
import {userCard} from "./UserInfoReducer";
import userList from "./UserListReducer";
import interestList from "./InterestListReducer"

const rootReducer = combineReducers({
    interestCard,
    interestList,
    userCard,
    userList,
>>>>>>> master
})

export default rootReducer