import {combineReducers} from 'redux'
import users from "./UserReducer";
import skills from "./SkillReducer"

const rootReducer = combineReducers({
    users,
    skills,
})

export default rootReducer