import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import {Modele} from './modele.reducer';
import {Version} from './version.reducer';
import {Option} from './option.reducer';
import {Color} from './color.reducer';

const rootReducer = combineReducers({
  authentication,
  Modele,
  Version,
  Option,
  Color,
  alert
});

export default rootReducer;