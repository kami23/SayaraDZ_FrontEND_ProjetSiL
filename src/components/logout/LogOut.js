import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import './LogOut.css'
export default class LogOut extends Component {
  render() {
    return (
        <button className="logoutText">
        <NavLink to="/login">Déconnecter</NavLink>
</button>
    )
  }
}
