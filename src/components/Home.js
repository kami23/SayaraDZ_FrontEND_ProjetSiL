import React, { Component } from 'react'
import "./Home.css" 
import {NavLink} from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
    <div>
        <h1>HOME </h1>
<NavLink to="/home" classeName='link'>hi </NavLink>
      </div>
    )
  }
}
