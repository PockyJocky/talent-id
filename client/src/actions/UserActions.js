import { REPLACE_USER_LIST, ADD_TO_USER_LIST } from "../Constant"

import callApi from '../apiCaller'
import { addNewSkills } from './SkillActions';

export const fetchUserList = () => {
    return async function(dispatch) {
        let users = await callApi('user', 'GET');
        await dispatch(replaceUserList(users));
        return users;
    }
}

export const addNewUser = (user) => {
    return async (dispatch) => {
        const skills = user.skills.map( skill => skill.name );
        await dispatch(addUserToList(user));
        await dispatch(addNewSkills(skills));
        return callApi('user', 'POST', user);
    }
};

export const replaceUserList = list => ({ type: REPLACE_USER_LIST, list });
export const addUserToList = user => ({ type: ADD_TO_USER_LIST, user });
