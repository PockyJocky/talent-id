import reducer from '../../src/reducers/UserListReducer'
import * as actions from '../../src/Constant'

const user = {
    firstName: 'Johnny',
    lastName: 'FiveHands',
    edipi: '90364',
    rank: 'Maj',
    squadron: '707CS'
}

const initialState = [];

describe('UserListReducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    })

    it('should handle ADD_TO_LISt', () => {
        let action = { user: user, type: actions.ADD_TO_USER_LIST };
        let state = [ user ];
        expect(reducer(undefined, action)).toEqual(state);
    });
    
    it('should handle UPDATE_LIST', () => {
        let list = [ user, user, user ];
        let action = { list: list, type: actions.UPDATE_USER_LIST };
        let state = list;
        expect(reducer(undefined, action)).toEqual(state);
    });
});