import * as Actions from '../../src/Constant'
import * as UserListActions from '../../src/actions/UserListActions'

describe('UserListActions', () => {
    it('should create an action to update the list', () => {
        const list = [ true, false, true ];
        const expectedAction = {
            list : list,
            type: Actions.UPDATE_USER_LIST
        };
        expect(UserListActions.updateUserList(list)).toEqual(expectedAction)
    });

    
    it('should create an action to add user to list', () => {
        const user = { name: 'test' };
        const expectedAction = {
            user : user,
            type: Actions.ADD_TO_USER_LIST
        };
        expect(UserListActions.addToUserList(user)).toEqual(expectedAction)
    });
});