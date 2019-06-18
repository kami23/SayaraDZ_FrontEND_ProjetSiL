import selectReducer from '../../src/_reducers/modele.reducer';
import {
    FETECHED_ALL_Modele,
    Modele_DETAIL
} from '../../src/_reducers/modele.reducer';

describe('Modele_reducer', () => {
    test('returns the correct state', () => {
        //Playload
        const action = { type: FETECHED_ALL_Modele, Modele = Modele};
        const expectedState = {};
    
        expect(selectReducer(undefined, action)).toEqual(expectedState);
      });
});
