import { REPLACE_SKILL_LIST, ADD_TO_SKILL_LIST } from "../Constant"

import callApi from '../apiCaller'

export const fetchSkillList = () => {
    return async function(dispatch) {
        let skills = await callApi('skills', 'GET');
        await dispatch(replaceSkillList(skills));
        return skills;
    }
}

export const addNewSkills = skills => {
    return function(dispatch) {
        return skills.map( skill => dispatch(addSkillToList(skill)))
    }
}

export const replaceSkillList = list => ({ type: REPLACE_SKILL_LIST, list });
export const addSkillToList = skill => ({ type: ADD_TO_SKILL_LIST, skill });
