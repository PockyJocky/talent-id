import * as reducer from '../../src/reducers/InterestCardReducer'
import * as actions from '../../src/Constant'

let skillList = { skillList: [] }
const interest = {
    edipi: '90364',
    skillName: 'Singing and Dancing',
    skillValue: '5',
    interestValue: '5'
}

describe('UserInfoReducer', () => {
    beforeEach(() => {
        skillList = { skillList: [] }
    });
    it('should return the intial state', () => {
        expect(reducer.interestCard(undefined, {})).toEqual(skillList)
    })

    it('should handle ADD_INTEREST', () => {
        skillList.skillList.push(interest)
        expect(reducer.interestCard(
            undefined, { interest: interest, type: actions.ADD_INTEREST})).toEqual(skillList)
    });
    it('should handle UPDATE_INTEREST', () => {
        expect(reducer.interestCard(
            undefined, { interest: interest, type: actions.UPDATE_INTEREST})).toEqual(interest)
    });
});