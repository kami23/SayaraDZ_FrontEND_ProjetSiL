  import React, { Component } from 'react'
  import './ElementNavBar.css'
  import {NavLink} from 'react-router-dom';
  import ListItem from '@material-ui/core/ListItem';
  import ListItemText from '@material-ui/core/ListItemText';

  export default class ElementNavBar extends Component {
    render() {
      return (
    
    <div className="ElementNavBar">

          <NavLink  to={this.props.path} classeName="link">
        
          <ListItem classeName="link" button>
                        <img alt="icon" src=  {this.props.srcImg}/>
  <ListItemText primary={this.props.text} />
                </ListItem>
          </NavLink>
        </div>
      )
    }
  }
