import React, { Component,Fragment } from 'react'
import './NavBar.css'
import { Nav,NavItem } from "reactstrap";
import home from '../../assets/icons/home.png'
import users from '../../assets/icons/users.png'
import fabricant from '../../assets/icons/fabricant.png'
import loggs from '../../assets/icons/loggs.png'
import user from '../../assets/icons/user.png'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Icon from "@material-ui/core/Icon";

import Collapse from '@material-ui/core/Collapse';

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    
    NavLink,
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
 const elements= [
  { text: "Acceuil", icon: home, path:"/Acceuil" },
  { text: "Commandes", icon: users ,path:"/Commandes"},
  { text: "Simuler Prix", icon: loggs , path:"/SimulerPrix" }
];
const styles = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  };

  
class NavBar extends Component {
    state = {
        open: true,
      };


      
      handleClick = () => {
        this.setState(state => ({ open: !state.open }));
      };
        
  
  render() {
  const classes =styles;
    return (
            <Fragment>
        
             <div className='userCont'> 
            <img className="user" src={user}/>
        </div>
        <div className="userNameCont"> 
           <h4> Admin </h4>

        </div>
        <List >
        <ListItem button onClick={this.handleClick}>
          <ListItemText inset primary="Gestion donnée" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={styles.root}>
            </ListItem>
          
            <ListItem button>
            </ListItem>
          
            <ListItem button>
          
            </ListItem>
          
            <ListItem button>
          
            
            </ListItem>
          </List>
        </Collapse>
        </List>

            </Fragment>
        )
    }
}

export default NavBar