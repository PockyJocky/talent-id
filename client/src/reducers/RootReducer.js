import { combineReducers } from 'redux'
import users from "./UserReducer";
import skills from "./SkillReducer"
import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';

const rootReducer = combineReducers({
    users: users,
    skills: skills,
    auth: authReducer,
    errors: errorReducer
});

export default rootReducer