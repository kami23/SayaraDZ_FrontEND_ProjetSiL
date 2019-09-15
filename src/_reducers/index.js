import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import {Modele} from './modele.reducer';
import {Version} from './version.reducer';
import {Option} from './option.reducer';
import {Color} from './color.reducer';
import {Commande} from './commande.reducer';
import slider from './slider.reducer';
import settings from './settings.reducer';



const rootReducer = combineReducers({
  authentication,
  Modele,
  Version,
  Option,
  Color,
  alert,
  slider,
  settings,
  Commande
});

export default rootReducer;