import React , {Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem ,MenuList} from '@material-ui/core';
import {Link} from 'react-router-dom'
import user from '../../assets/icons/user.png'

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },

  menuItem: {
    backgroundColor: 'white',
    width:'88%',
       '&:focus': {
           borderLeft:'4px solid red',
         backgroundColor: 'gray',
         '& $primary, & $icon': {
           color: theme.palette.common.white,
         },
       },
     },
     primary: {},
     icon: {},
     menu: {
         width:'100%',
         backgroundColor:'white'
      },

      nested: {
        paddingLeft: theme.spacing.unit * 4,
      },
      logo :{
        
      }
});

class SideBar extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, theme } = this.props;
    var brand = (
      <Typography className={classes.title} variant="h6" color="inherit" noWrap>
      SyaraDZ Admin
               </Typography>
        
    );

    const drawer = (
      <div>
        {brand}
      <Hidden>
        <div className={classes.toolbar} />
        </Hidden>
        <div className='userCont'> 
            <img className="user" src={user}/>
        </div>
        <div className="userNameCont"> 
           <h4> Admin </h4>

        </div>
         <MenuList className={classes.menu}>
        <MenuItem component={Link} to="/Acceuil" className={classes.menuItem}>
       Acceuil
        </MenuItem>
        <MenuItem component={Link} to="/Acceuil" className={classes.menuItem}>
       Gestion Commandes
        </MenuItem>
        <MenuItem onClick={this.handleClick} className={classes.menuItem}>
      Gestion Données
      {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </MenuItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
           <MenuItem component={Link} to="/modeles" button className={classes.nested}>
           Gestion Modèles
            </MenuItem>
            <MenuItem button className={classes.nested}>
           Gestion Versions
            </MenuItem>
            <MenuItem button className={classes.nested}>
           Gestion Couleurs
            </MenuItem>
            <MenuItem button className={classes.nested}>
           Gestion Options
            </MenuItem>
        </Collapse>
        <MenuItem component={Link} to="/Simuler" className={classes.menuItem}>
      Simuler Prix
        </MenuItem>
        

       </MenuList>
             </div>
    );

    return (
        <Fragment>
              <CssBaseline />
      
      <div className={classes.root}>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
       </div>
      </Fragment>
      
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideBar);