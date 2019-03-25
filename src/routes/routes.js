
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import Contact from '../components/Contact';
import About from '../components/About';
import {Modele} from '../components/modele.component'
import {AddModele} from '../components/Addmodele.component'
const routes = (
<Switch>
  <Route exact path='/Acceuil' component={Home} />
  
  <Route exact path='/Users' component={Contact} />
  <Route exact path='/about' component={About} />
  <Route exact path='/modeles' component={Modele} />
  <Route exact path='/add-modele' component={AddModele} />
  <Route exact path='/edit-modele/:id' component={AddModele} />

  </Switch>
  );

  export default routes;