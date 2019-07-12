import configureStore from 'redux-mock-store';

//Actions to be tested
import * as selectActions from '../../src/_actions/modele.action.js';

const mockStore = configureStore();
const store = mockStore();


describe('select_actions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });
  
    // ...
  
    describe('selectModele', () => {
        test('Dispatches the correct action and payload', () => {
          const expectedActions = [
            {  
              'Modele': Modele,
              //playload
              'type': 'FETECHED_ALL_Modele',
            },
          ];
      
          //store.dispatch(selectActions.selectAvatar(1));
          store.dispatch(createModele(payload));
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

      describe('UserInfos', () => {
        test('Create user infos', () => {
          const expectedActions = [
            {  
              type: "USER_CREATED_SUCCESSFULLY"
            },
          ];

          store.dispatch(selectActions.createUserInfo());
          expect(store.getActions()).toEqual(expectedActions);
        });

        test('Update user infos', () => {
          const expectedActions = [
            {  
              type: "USER_UPDATED"
            },
          ];
          
          store.dispatch(selectActions.updatedUserInfo());
          expect(store.getActions()).toEqual(expectedActions);
        });

        test('Delete user infos', () => {
          const expectedActions = [
            {  
              type: "DELETED_MODELE_DETAILS"
            },
          ];
          
          store.dispatch(selectActions.deleteModeleDetails());
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
      



  });