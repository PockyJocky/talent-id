import * as Actions from '../../src/Constant'
import * as InterestActions from '../../src/actions/InterestCardActions'

const interest = {
    edipi: '90364',
    skillName: 'Singing and Dancing',
    skillValue: '5',
    interestValue: '5'
}

describe('UserActions', () => {
    it('should create an action to add a user', () => {
        const addInterest = interest;
        const expectedAction = {
            interest : addInterest,
            type: Actions.ADD_INTEREST
        }

        expect(InterestActions.addInterest(interest)).toEqual(expectedAction)
    });

    it('should update the props', () => {
        const updateInterest = interest;
        const expectedAction = {
            interest: updateInterest,
            type: Actions.UPDATE_INTEREST
        }

        expect(InterestActions.updateInterest(interest)).toEqual(expectedAction)
    });
});