import * as reducer from '../../src/reducers/UserInfoReducer'
import * as actions from '../../src/Constant'

const user = {
    firstName: 'Johnny',
    lastName: 'FiveHands',
    edipi: '90364',
    rank: 'Maj',
    squadron: '707CS'
}

const initialUser = {user : {
        edipi: "",
        firstName: "",
        lastName: "",
        rank: "AB",
        squadron: "13 IS"
}}

describe('UserInfoReducer', () => {
    it('should return the initial state', () => {
        expect(reducer.userCard(undefined, {})).toEqual(initialUser)
    })
    it('should handle ADD_USER', () => {
        expect(reducer.userCard(
            undefined, { user: user, type: actions.ADD_USER})).toEqual(user)
    });
    it('should handle UPDATE_USER', () => {
        expect(reducer.userCard(
            undefined, { user: user, type: actions.UPDATE_USER})).toEqual(user)
    });
});