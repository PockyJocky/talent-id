import {combineReducers} from 'redux'
import { routerReducer as routing } from 'react-router-redux';
import {interestCard} from "./InterestCardReducer";
import {userCard} from "./UserInfoReducer";
import navigation from "./NavigationReducer";

const rootReducer = combineReducers({
    interestCard,
    userCard,
    navigation,
    routing
})

export default rootReducer