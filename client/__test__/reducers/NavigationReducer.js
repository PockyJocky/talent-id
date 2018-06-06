import reducer from '../../src/reducers/NavigationReducer';
import { UPDATE_PLACE } from '../../src/Constant';

const initalState = {
    place: 0
};

describe('NavigationReducer', () => {
    it('should return the intial state', () => {
        expect(reducer(undefined, {})).toEqual(initalState);
    })

    it('should handle UPDATE_PLACE', () => {
        let state = { place: 2 };
        let action = { place: 2, type: UPDATE_PLACE };
        expect(reducer(undefined, action)).toEqual(state);
    });
});