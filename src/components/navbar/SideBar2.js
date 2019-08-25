import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom'
import user from '../../assets/icons/user.png'
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

import {
    AppBar, CssBaseline,
    Divider, Drawer, Hidden, Toolbar, Typography,
    MenuItem, MenuList, ListItemIcon, IconButton, Icon, withStyles
} from '@material-ui/core';
//import { ExpandLess, ExpandMore } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

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
        width: '88%',
    },
    menuItem: {
        fontStyle: 'bold',
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
    },

   
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        boxShadow: '2px 4px 19px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#2e2d2c',

        width: drawerWidth,

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    userProfile: {
        marginTop: '20%',
        hight:'70%',
    },
    userName: {
        marginTop:'5px',
        marginLeft:'80px',
        align: 'center',
        color:'#ffffff'
    },
    title: {
        width:"108%",
   height:"66px",
   color:'#ffffff',
   borderButtom:"4px solid black",
   padding:'20px',
   paddingLeft:'40px'
    },
   
  
});


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

    handleClickChangeTitle (title){
       this.setState (state=> {state.title=title});
    }
    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };


    render() {
        const { classes, theme } = this.props;
        const { location: { pathname } } = this.props;

        var brand = (
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                SayaraDZ Admin
                    </Typography>

        );

        const drawer = (
            <div className={classes.side}>
                <Hidden smDown>
                    <div className={classes.toolbar} >
                        {brand}
                        <Divider />
                    </div>
                </Hidden>
                <div className={classes.userProfile}>
                    <img className="user" alt="user" src={user} />
                </div>
                <div className={classes.userName}>
                    <h4> Admin </h4>
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

                    <MenuItem component={Link} to="/utilisateurs"
                        classes={{
                            root: classes.menuItemRootCommande,
                            selected: classes.menuItemSelectedCommande
                        }} selected={pathname === "utilisateurs"}>
                        <ListItemIcon>
                            <Icon className={classes.iconCommande} > supervised_user_circle </Icon>
                        </ListItemIcon>
                        Gestion Utilisateurs</MenuItem>


                    <MenuItem component={Link} to="/fabricants" classes={{
                        root: classes.menuItemRootCar,
                        selected: classes.menuItemSelectedCar
                    }} selected={pathname === "/fabricants"}>
                        <ListItemIcon>
                            <Icon className={classes.iconData} >settings</Icon>
                        </ListItemIcon>
Gestion fabricants            </MenuItem>

           
                    <MenuItem component={Link} to="/loggs" classes={{
                        root: classes.menuItemRootCar,
                        selected: classes.menuItemSelectedCar
                    }} selected={pathname === "/loggs"}>
                        <ListItemIcon>
                            <Icon className={classes.iconCar} >insert_drive_file</Icon>
                        </ListItemIcon>
Loggs            </MenuItem>


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
                  <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-owns={'material-appbar'}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                 </Grid>
               
                <div className={classes.sectionMobile}>
                  <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                    <MoreIcon />
                  </IconButton>
                </div>
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