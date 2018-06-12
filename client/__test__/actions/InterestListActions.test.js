import * as Actions from '../../src/Constant'
import * as InterestListActions from '../../src/actions/InterestListActions'

describe('InterestListActions', () => {
    it('should create an action to update the list', () => {
        const list = [ true, false, true ];
        const expectedAction = {
            list : list,
            type: Actions.UPDATE_LIST
        };
        expect(InterestListActions.updateList(list)).toEqual(expectedAction)
    });


    it('should create an action to add an interest to list', () => {
        const interest = { name: 'test' };
        const expectedAction = {
            interest : interest,
            type: Actions.ADD_TO_LIST
        };
        expect(InterestListActions.addToList(interest)).toEqual(expectedAction)
    });
});