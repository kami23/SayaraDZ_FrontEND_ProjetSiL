
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
import {Commande} from '../components/commande/commande.component2'
import {Fichier} from '../components/acceuil/fichier.component'
import {MultipleSelect} from '../components/simuler/dropdownlist/dropdownlist.component';

const routes = (
  <Switch>
    <Route exact path='/Acceuil' component={Fichier} />
    <Route exact path='/modeles' component={Modele} />
    <Route exact path='/add-modele' component={AddModele} />
    <Route exact path='/edit-modele/:id' component={AddModele} />
    
    <Route exact path='/versions' component={Version} />
    <Route exact path='/add-version' component={AddVersion} />
    <Route exact path='/edit-version/:id' component={AddVersion} />

    <Route exact path='/options' component={Option} />
    <Route exact path='/add-option' component={AddOption} />
    <Route exact path='/edit-option/:id' component={AddOption} />

    <Route exact path='/colors' component={Color} />
    <Route exact path='/add-color' component={AddColor} />
    <Route exact path='/edit-color/:id' component={AddColor} />
     
    <Route exact path='/commandes' component={Commande} />
    

    <Route exact path='/Simuler' component={MultipleSelect} />


  </Switch>
);

export default routes;