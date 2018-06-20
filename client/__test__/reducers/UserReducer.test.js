import reducer from '../../src/reducers/UserReducer'
import * as actions from '../../src/Constant'

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

const initialState = [];

describe('UserReducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    })

    it('should handle ADD_TO_LIST', () => {
        let action = { user: users[0], type: actions.ADD_TO_USER_LIST };
        let state = [ users[0] ];
        expect(reducer(undefined, action)).toEqual(state);
    });
    
    it('should handle REPLACE_USER_LIST', () => {
        let action = { list: [ ...users ], type: actions.REPLACE_USER_LIST };
        expect(reducer(undefined, action)).toEqual(users);
    });
});