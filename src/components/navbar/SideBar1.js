import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Icon from "@material-ui/core/Icon";

import IconButton from '@material-ui/core/IconButton';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, MenuList } from '@material-ui/core';
import { Link } from 'react-router-dom'
import user from '../../assets/icons/user.png'

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

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

    icon: {
        color: '#bcbcbc',
        '&:focus': {
            color: '#51bcda',
        }

    },
    active: {

        borderLeft: '4px solid #51bcda',
        backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
        color: '#51bcda',
        '& $primary, & $icon': {
            color: '#51bcda',
        },

    },
    menuItem: {
        fontStyle:'bold',
        backgroundColor: 'white',
        width: '88%',
        '&:focus': {
            borderLeft: '4px solid #51bcda',
           backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
        // backgroundColor: '#ebf8fe',
         
         fontStyle:'bold',

         color: '#51bcda',
            '& $primary, & $icon': {
                color: '#51bcda',
            },
        },
    },
    primary: {},
    icon: {},
    menu: {
        width: '100%',
        backgroundColor: 'white'
    },

    nested: {
        paddingLeft: theme.spacing.unit * 4,
        '&:focus': {
            borderLeft: '4px solid #51bcda',
            // backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
            backgroundColor: '#ebf8fe',
            color: '#51bcda',
            '& $primary, & $icon': {
                color: '#51bcda',
            },
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
    userProfile: {
        marginTop: '20%'
    },
    userName: {
        align: 'center'
    },
    title: {
        marginTop: '5%',
        marginLeft: '20%',
        marginButtom: '0%'
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
                SayaraDZ Admin
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
                    <img className="user" src={user} />
                </div>
                <div className={classes.userName}>
                    <h4> Admin </h4>
                </div>
                <MenuList className={classes.menu}>
                    <MenuItem component={Link} to="/Acceuil" className={classes.menuItem}>
                        <ListItemIcon>
                            <Icon className={classes.icon}>
                                home
        </Icon>
                        </ListItemIcon>
                        Acceuil
            </MenuItem>
                    <MenuItem component={Link} to="/Acceuil" className={classes.menuItem}>
                        <ListItemIcon>
                            <Icon className={classes.icon} >
                                insert_drive_file
        </Icon>
                        </ListItemIcon>
                        Gestion Commandes
            </MenuItem>
                    <MenuItem onClick={this.handleClick} className={classes.menuItem}>
                        <ListItemIcon>
                            <Icon className={classes.icon}>
                                settings

        </Icon>
                        </ListItemIcon>
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
                    <MenuItem component={Link} to="/Acceuil" className={classes.menuItem}>
                        <ListItemIcon>
                            <Icon className={classes.icon} >
                                directions_car
        </Icon>
                        </ListItemIcon>
                        Simuler Prix
            </MenuItem>


                </MenuList>
            </div>
        );

        return (
            <div className={classes.root}>
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
                        <Typography variant="h6" color="inherit" noWrap>
                            Responsive drawer
                </Typography>
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
            </div>
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