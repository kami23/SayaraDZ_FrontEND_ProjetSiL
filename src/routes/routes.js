
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Modele } from '../components/modele.component'
import { AddModele } from '../components/Addmodele.component'
import { Version } from '../components/version.component'
import { AddVersion } from '../components/AddVersion.component'
import { AddOption } from '../components/AddOption.component'
import { Option } from '../components/option.component'
import { Color } from '../components/color.component'
import { AddColor } from '../components/Addcolor.component'

const routes = (
  <Switch>
    <Route exact path='/Acceuil' />

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


  </Switch>
);

export default routes;