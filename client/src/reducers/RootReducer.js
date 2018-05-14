import {combineReducers} from 'redux'
import { routerReducer as routing } from 'react-router-redux';
import {interestCard} from "./InterestCardReducer";
import {userCard} from "./UserInfoReducer";

const rootReducer = combineReducers({
    interestCard,
    userCard,
    routing
})

export default rootReducer