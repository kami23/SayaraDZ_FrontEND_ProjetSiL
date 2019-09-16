
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Modele } from '../components/modeles/modele.component'
//import { Modele } from '../components/modeles/mod'
import { AddModele } from '../components/modeles/Addmodele.component'
import { Version } from '../components/versions/version.component'
import { AddVersion } from '../components/versions/AddVersion.component'
import { AddOption } from '../components/options/AddOption.component'
import { Option } from '../components/options/option.component'
import { Color } from '../components/colors/color.component'
import { AddColor } from '../components/colors/Addcolor.component'
import {Commande} from '../components/commande/commande.component'
//import {Fichier} from '../components/acceuil/fichier.component'
import {UploadCSV} from '../components/home/Home'
import {MultipleSelect} from '../components/simuler/dropdownlist/dropdownlist.component';

const routes = (
  <Switch>
    <Route exact path='/Acceuil' component={UploadCSV} />
    <Route path='/modeles' component={Modele} />
    <Route exact path='/add-modele' component={AddModele} />
    <Route exact path='/edit-modele/:id' component={AddModele} />
    
    <Route exact path='/versions' component={Version} />
    <Route exact path='/add-version' component={AddVersion} />
    <Route exact path='/edit-version/:id/:value' component={AddVersion} />

    <Route exact path='/options' component={Option} />
    <Route exact path='/add-option' component={AddOption} />
    <Route exact path='/edit-option/:id/' component={AddOption} />

    <Route exact path='/colors' component={Color} />
    <Route exact path='/add-color' component={AddColor} />
    <Route exact path='/edit-color/:id/:value' component={AddColor} />
     
    <Route exact path='/commandes' component={Commande} />
    <Route exact path='/Simuler' component={MultipleSelect} />

   

  </Switch>
);

export default routes;