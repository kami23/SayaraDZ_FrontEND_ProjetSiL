import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom'
import user from '../../assets/icons/user.png'
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import LogOut from '../logout/LogOut';
import {
    AppBar, CssBaseline,
    Divider, Drawer, Hidden, Toolbar, Typography,
    MenuItem, MenuList, Collapse, ListItemIcon, IconButton, Icon, withStyles
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
const drawerWidth = 240;

const styles = theme => ({
    root: {
        
        display: 'flex',
        boxShadow: '2px 4px 19px rgba(0, 0, 0, 0.25)',
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
            backgroundColor: 'white',
            color: 'black'
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    menuItemRoot: {
        fontStyle: 'bold',
        backgroundColor: 'white',
        width: '88%',
        "&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover": {
            borderLeft: '4px solid #51bcda',
            backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
                }
    },
    menuItemSelected: {},
    icon: {
        color: '#bcbcbc',
        '&:focus': {
            color: '#51bcda',
        }

    },
    menuItemRootHome: {
        fontStyle: 'bold',
        backgroundColor: 'white',
        width: '88%',
        "&$menuItemSelectedHome, &$menuItemSelectedHome:focus, &$menuItemSelectedHome:hover": {
            borderLeft: '6px solid #51bcda',
            backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
                }
    },
    menuItemSelectedHome: {},
    iconHome:{
        color:'#51bcda'
    },
    menuItemRootCommande: {
        fontStyle: 'bold',
        backgroundColor: 'white',
        width: '88%',
        "&$menuItemSelectedCommande, &$menuItemSelectedCommande:focus, &$menuItemSelectedCommande:hover": {
            borderLeft: '6px solid #fcc468',
            backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
                }
    },
    menuItemSelectedCommande: {},
    iconCommande:{
        color:'#fcc468'
    },
    
    menuItemRootData: {
        paddingLeft: theme.spacing.unit * 4,

        fontStyle: 'bold',
        backgroundColor: 'white',
        width: '88%',
        "&$menuItemSelectedData, &$menuItemSelectedData:focus, &$menuItemSelectedData:hover": {
            borderLeft: '6px solid #f17e5d',
            backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
                }
    },
    menuItemSelectedData: {},
    iconData:{
        color:'#f17e5d'
    },
    
    menuItemRootCar: {
        fontStyle: 'bold',
        backgroundColor: 'white',
        width: '88%',
        "&$menuItemSelectedCar, &$menuItemSelectedCar:focus, &$menuItemSelectedCar:hover": {
            borderLeft: '6px solid #6bd098',
            backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
                }
    },
    menuItemSelectedCar: {},
    iconCar:{
        color:'#6bd098'
    },
    active: {

        borderLeft: '4px solid #51bcda',
        backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
        color: '#51bcda',
        '& $primary, & $icon': {
            color: '#51bcda',
        },


    },
    menuItemactive: {
        fontStyle: 'bold',
        backgroundColor: 'red',
        width: '88%',
    },
    menuItem: {
        fontStyle: 'bold',
        backgroundColor: 'white',
        width: '88%',
        ' &:active': {
            borderLeft: '4px solid #51bcda',
            backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",

        },
        '&:focus ': {
            borderLeft: '4px solid #51bcda',
            backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
            // backgroundColor: '#ebf8fe',

            fontStyle: 'bold',

            color: '#51bcda',
            '& $primary, & $icon': {
                color: '#51bcda',
            },
        },
    },
    primary: {},
    menu: {
        width: '100%',
        backgroundColor: 'white'
    },

   
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        boxShadow: '2px 4px 19px rgba(0, 0, 0, 0.25)',

        width: drawerWidth,

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    userProfile: {
        height:'140px',
        wdith:'100%',
        marginTop: '20%'
    },
    userName: {
        marginTop:'5px',
        marginLeft:'15px',
        align: 'center'
    },
    title: {
        width:"108%",
   height:"66px",
   borderButtom:"4px solid black",
   padding:'20px',
   paddingLeft:'40px'
    },
    img:{
        height:'140px',
        width:'170px',
        marginLeft:'30px',
    }
  
});


const anchorEl= false;
const mobileMoreAnchorEl=false;
const menuId = 'primary-search-account-menu';

function   handleMenuClose() {
   anchorEl=false;
  }

const isMenuOpen = anchorEl;
const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem >Profile</MenuItem>
      <MenuItem >My account</MenuItem>
    </Menu>
  );

class SideBar extends React.Component {

    
    componentDidMount() {

    }

    activeRoute(path) {
        if (this.props.location.pathname === path) {
            return ("active")
        }
        else {
            return ("")
        }
    }
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    state = {
        open: false,
        title:""
    };

    handleClickChangeTitle (title1){
        this.state(state => ({title:title1}));
    }
    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleProfileMenuOpen(event) {
        anchorEl=true;
      }
    

    render() {
        const { classes, theme } = this.props;
        const { location: { pathname } } = this.props;

        var brand = (
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                SayaraDZ Fabricant
                    </Typography>

        );

        const drawer = (
            <div>
                <Hidden smDown>
                    <div className={classes.toolbar} >
                        {brand}
                        <Divider />
                    </div>
                </Hidden>
                <div className={classes.userProfile}>
                    <img className={classes.img} alt="user" src={user} />
                </div>
                <div className={classes.userName}>
                    <h4> </h4>
                </div>
                <MenuList className={classes.menu}>
                    <MenuItem component={Link} to="/Acceuil"
                        classes={{
                            root: classes.menuItemRootHome,
                            selected: classes.menuItemSelectedHome
                        }} selected={pathname === "/Acceuil"}>
                        <ListItemIcon>
                            <Icon className={classes.iconHome}> home </Icon>
                        </ListItemIcon>
                        Accueil </MenuItem>

                    <MenuItem component={Link} to="/commandes"
                        classes={{
                            root: classes.menuItemRootCommande,
                            selected: classes.menuItemSelectedCommande
                        }} selected={pathname === "/commandes"}>
                        <ListItemIcon>
                            <Icon className={classes.iconCommande} >insert_drive_file   </Icon>
                        </ListItemIcon>
                        Gestion Commandes</MenuItem>


                    <MenuItem onClick={this.handleClick} classes={{
                        root: classes.menuItemRoot,
                        selected: classes.menuItemSelected
                    }}>
                        <ListItemIcon>
                            <Icon className={classes.iconData}>settings</Icon>
                        </ListItemIcon> Gestion Données

        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </MenuItem>

                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <MenuItem component={Link} to="/modeles" button 
                        classes={{
                            root: classes.menuItemRootData,
                            selected: classes.menuItemSelectedData
                        }}
                        selected={pathname === "/modeles"}>
                            Gestion Modèles
                </MenuItem>
                        <MenuItem component={Link} to="/versions" button
                        classes={{
                            root: classes.menuItemRootData,
                            selected: classes.menuItemSelectedData
                        }}
                        selected={pathname === "/versions"}>
                            Gestion Versions
                </MenuItem>
                        <MenuItem button component={Link} to="/colors" 
                        classes={{
                            root: classes.menuItemRootData,
                            selected: classes.menuItemSelectedData
                        }}
                        selected={pathname === "/colors"}>
                            Gestion Couleurs
                </MenuItem>
                        <MenuItem button component={Link} to="/options" 
                        classes={{
                            root: classes.menuItemRootData,
                            selected: classes.menuItemSelectedData
                        }}
                        selected={pathname === "/options"}>
                            Gestion Options
                </MenuItem>

                    </Collapse>

                    <MenuItem component={Link} to="/Simuler" button
                     classes={{
                        root: classes.menuItemRootCar,
                        selected: classes.menuItemSelectedCar
                    }} selected={pathname === "/Simuler"}>
                        <ListItemIcon>
                            <Icon className={classes.iconCar} >directions_car </Icon>
                        </ListItemIcon>
                        Simuler Prix
            </MenuItem>


                </MenuList>
            </div>
        );

        return (
            <div className={classes.root}>
              <Grid container spacing={24}>  
                            <CssBaseline />

                           
                            

                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Grid item xs={3}>

                        <Typography variant="h6" color="inherit" noWrap>
{this.state.title}
                </Typography>
                </Grid>

                <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                           
                    <div className={classes.sectionDesktop}>
                

{renderMenu}                 </div>
                 </Grid>
               
                </Toolbar>
                
                </AppBar>
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
</Grid>
            </div>
        );
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(SideBar));