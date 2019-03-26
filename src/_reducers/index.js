import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import {Modele} from './modele.reducer';
const rootReducer = combineReducers({
  authentication,
  Modele,
  alert
});

export default rootReducer;