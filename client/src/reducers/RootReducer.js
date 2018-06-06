import {combineReducers} from 'redux'
import { routerReducer as routing } from 'react-router-redux';
import {interestCard} from "./InterestCardReducer";
import {userCard} from "./UserInfoReducer";
import navigation from "./NavigationReducer";
import userList from "./UserListReducer";

const rootReducer = combineReducers({
    interestCard,
    userCard,
    navigation,
    userList,
    routing
})

export default rootReducer