import reducer from '../../src/reducers/SkillReducer'
import * as actions from '../../src/Constant'

const skills = [
    'foo',
    'bar',
];

const initialState = [];

describe('SkillReducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    })

    it('should handle ADD_TO_SKILL_LIST', () => {
        let action = { skill: skills[0], type: actions.ADD_TO_SKILL_LIST };
        let state = [ skills[0] ];
        expect(reducer(undefined, action)).toEqual(state);
    });
    
    it('should handle duplicate ADD_TO_SKILL_LIST', () => {
        let action = { skill: skills[0], type: actions.ADD_TO_SKILL_LIST };
        let state = [ skills[0] ];
        expect(reducer([ skills[0] ], action)).toEqual(state);
    });

    it('should handle REPLACE_SKILL_LIST', () => {
        let action = { list: [ ...skills ], type: actions.REPLACE_SKILL_LIST };
        expect(reducer(undefined, action)).toEqual(skills);
    });
});