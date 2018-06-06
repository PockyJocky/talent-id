import * as Actions from '../../src/Constant'
import * as NavigationActions from '../../src/actions/NavigationActions'

describe('NavigationActions', () => {
    it('should create an action update the navigational place', () => {
        const newPlace = 1;
        const expectedAction = {
            place : newPlace,
            type: Actions.UPDATE_PLACE
        }
        expect(NavigationActions.updatePlace(newPlace)).toEqual(expectedAction)
    });
});