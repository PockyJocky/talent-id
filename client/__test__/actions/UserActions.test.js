import * as Actions from '../../src/Constant'
import * as UserActions from '../../src/actions/UserActions'

const users = [
    {
        firstName: 'Johnny',
        lastName: 'FiveHands',
        edipi: '90364',
        rank: 'Maj',
        squadron: '707CS'
    },
    {
        firstName: 'Bobba',
        lastName: 'Fett',
        edipi: '000001',
        rank: 'Gen',
        squadron: '222FLS'
    }
];


describe('UserInfoActions', () => {
    it('should create an action to add a user', () => {
        const expectedAction = {
            user : users[0],
            type: Actions.ADD_TO_USER_LIST
        }

        expect(UserActions.addUserToList(users[0])).toEqual(expectedAction)
    });

    it('should create an action to replace the skills list', () => {
        const expectedAction = {
            list: users,
            type: Actions.REPLACE_USER_LIST
        }

        expect(UserActions.replaceUserList(users)).toEqual(expectedAction)
    });
});