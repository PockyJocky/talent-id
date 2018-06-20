import * as Actions from '../../src/Constant'
import * as SkillActions from '../../src/actions/SkillActions'

const skills = [
    {
        name: 'foo',
        proficiency: 3,
        interest: 5
    },
    {
        name: 'bar',
        proficiency: 5,
        interest: 3
    },
];

describe('SkillActions', () => {
    it('should create an action to add a skill', () => {
        const expectedAction = {
            skill : skills[0],
            type: Actions.ADD_TO_SKILL_LIST
        }

        expect(SkillActions.addSkillToList(skills[0])).toEqual(expectedAction)
    });

    it('should create an action to replace the skills list', () => {
        const expectedAction = {
            list: skills,
            type: Actions.REPLACE_SKILL_LIST
        }

        expect(SkillActions.replaceSkillList(skills)).toEqual(expectedAction)
    });
});