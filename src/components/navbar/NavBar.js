import React, { Component } from 'react'
import './NavBar.css'
import ElementNavBar from '../elementNavBar/ElementNavBar'
import { Nav } from "reactstrap";
import home from '../../assets/icons/home.png'
import users from '../../assets/icons/users.png'
import fabricant from '../../assets/icons/fabricant.png'
import loggs from '../../assets/icons/loggs.png'

  
 const elements= [
  { text: "Acceuil", icon: home },
  { text: "Utilisateurs", icon: users },
  {  text: "Fabricants", icon: fabricant},
  { text: "Loggs", icon: loggs }
];
class NavBar extends Component {
  
  
  render() {
        return (
            <div className="sidebar">
        <Nav>      
        <div className="sidebar-wrapper" ref="sidebar">
        
  {elements.map(c => <ElementNavBar key={c.text} text={c.text} srcImg={c.icon} ></ElementNavBar>)}
    </div>
    </Nav>
            </div>
        )
    }
}

export default NavBar