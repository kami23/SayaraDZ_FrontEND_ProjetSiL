import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import  NavBar from './components/navbar/NavBar' 
import  Login from './components/login/Login' 
import LogOut from './components/logout/LogOut';
import LogoName from './components/logoName/LogoName';

class App extends Component {
  render() {
    return (
      <div>
    <LogoName/>
    <NavBar />
    <LogOut/>
      </div>
    );
  }
};

export default App
