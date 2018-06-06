import * as Actions from '../../src/Constant'
import * as UserActions from '../../src/actions/UserInfoActions'

const user = {
    firstName: 'Johnny',
    lastName: 'FiveHands',
    edipi: '90364',
    rank: 'Maj',
    squadron: '707CS'
}

describe('UserInfoActions', () => {
    it('should create an action to add a user', () => {
        const addUser = user;
        const expectedAction = {
            user : addUser,
            type: Actions.ADD_USER
        }

        expect(UserActions.addUser(user)).toEqual(expectedAction)
    });

    it('should update the props', () => {
        const updateUser = user;
        const expectedAction = {
            user: updateUser,
            type: Actions.UPDATE_USER
        }

        expect(UserActions.updateUser(user)).toEqual(expectedAction)
    });
});