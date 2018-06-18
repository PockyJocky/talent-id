import * as reducer from '../../src/reducers/UserInfoReducer'
import * as actions from '../../src/Constant'

const user = {
    firstName: 'Johnny',
    lastName: 'FiveHands',
    edipi: '90364',
    rank: 'Maj',
    squadron: '707CS'
}

const initialState = {
    edipi: "",
    firstName: "",
    lastName: "",
    rank: "AB",
    squadron: "13 IS"
};

describe('UserInfoReducer', () => {
    it('should return the initial state', () => {
        expect(reducer.userCard(undefined, {})).toEqual(initialState)
    })
    it('should handle ADD_USER', () => {
        let action = { user: user, type: actions.ADD_USER };
        let state = user;
        expect(reducer.userCard(undefined, action)).toEqual(state)
    });
    it('should handle UPDATE_USER', () => {
        let action = { user: user, type: actions.UPDATE_USER };
        let state = user;
        expect(reducer.userCard(undefined, action)).toEqual(state)
    });
});