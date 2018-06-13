import reducer from '../../src/reducers/InterestListReducer'
import * as actions from '../../src/Constant'

const interest = {
    edipi: '90364',
    skillName: 'Singing and Dancing',
    skillValue: '5',
    interestValue: '5'
}

const initialState = [];

describe('InterestListReducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    })

    it('should handle ADD_TO_LISt', () => {
        let action = { interest: interest, type: actions.ADD_TO_INTEREST_LIST };
        let state = [ interest ];
        expect(reducer(undefined, action)).toEqual(state);
    });

    it('should handle UPDATE_LIST', () => {
        let list = [ interest, interest, interest ];
        let action = { list: list, type: actions.UPDATE_INTEREST_LIST };
        let state = list;
        expect(reducer(undefined, action)).toEqual(state);
    });
});