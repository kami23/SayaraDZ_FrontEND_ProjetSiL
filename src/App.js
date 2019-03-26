import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import  NavBar from './components/navbar/NavBar' 
import  Login from './components/login/Login' 
import LogOut from './components/logout/LogOut';
import LogoName from './components/logoName/LogoName';
import RegularTables from './components/table/Tables';
import InputsBar from './components/inputs/Inputs';
import TopBar from './components/topbar/TopBar';
import LineSep from './components/lineseparate/LineSep';
import ListSel from './components/list/ListSel';


class App extends Component {
  render() {
    return (
      <div>
    <LogoName/>
    <NavBar />
    <TopBar/>
    <LineSep/>
    <ListSel/>
  <InputsBar/>
    <RegularTables/>
 
      </div>
    );
  }
};

export default App
