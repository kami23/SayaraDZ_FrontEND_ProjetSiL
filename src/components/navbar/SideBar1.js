import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom'
import user from '../../assets/icons/user.png'
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import {
    AppBar, CssBaseline,
    Divider, Drawer, Hidden, Toolbar, Typography,
    MenuItem, MenuList, Collapse, ListItemIcon, IconButton, Icon, withStyles
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
    root: {

        display: 'flex',
        boxShadow: '2px 4px 19px rgba(0, 0, 0, 0.25)',
    },
    drawer: {
        color:"#94918d",
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            color:"#94918d"
        },
    },
    appBar: {
backgroundColor:"#4f5467",
color:"white",
        borderButtom: "10px solid black",
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,

            backgroundColor:"#4f5467",
            color:"white",
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    menuItemRoot: {
        padding:"20px",
        fontStyle: 'bold',
        backgroundColor: 'white',
        width: '88%',
        color:"#94918d",
        "&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover": {
            backgroundColor: "-webkit-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75), -moz-box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),   box-shadow: 6px 4px 53px -7px rgba(0,0,0,0.75),",
            color:"#eb5e28"
        },
        '&$icon:hover': {
            color: "red",
          },
     
    },
    menuItemSelected: {},
    icon: {},
   
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
    icon: {},
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
        marginTop: '20%'
    },
    userName: {
        paddingLeft: '12px',
        align: 'center'
    },
    title: {
        width: "108%",
        height: "66px",
        borderButtom: "4px solid black",
        padding: '20px',
        paddingLeft: '40px'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      grow: {
        flexGrow: 1,
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
        open: false,
        sectionTitle: 'Acceuil'
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };


    render() {
        const { classes, theme } = this.props;
        const { location: { pathname } } = this.props;
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        const renderMenu = (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
          );
        const renderMobileMenu = (
            <Menu
              anchorEl={mobileMoreAnchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMobileMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleMobileMenuClose}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <p>Messages</p>
              </MenuItem>
              <MenuItem onClick={this.handleMobileMenuClose}>
                <IconButton color="inherit">
                  <Badge badgeContent={11} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <p>Notifications</p>
              </MenuItem>
              <MenuItem onClick={this.handleProfileMenuOpen}>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
                <p>Profile</p>
              </MenuItem>
            </Menu>
          );
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
                    {console.log("Accauil" + this.activeRoute("/Acceuil"))}
                    <MenuItem component={Link} to="/Acceuil"
                        classes={{
                            root: classes.menuItemRoot,
                            selected: classes.menuItemSelected
                        }} selected={pathname === "/Acceuil"}
                        
     >
 <HomeOutlinedIcon />
                        

                        Acceuil </MenuItem>

                    <MenuItem component={Link} to="/Commande"
                        classes={{
                            root: classes.menuItemRoot,
                            selected: classes.menuItemSelected
                        }} selected={pathname === "/Commande"}>


                        Gestion Commandes</MenuItem>


                    <MenuItem onClick={this.handleClick} classes={{
                        root: classes.menuItemRoot,
                        selected: classes.menuItemSelected
                    }}>
<SettingsOutlinedIcon/> Gestion Données

        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </MenuItem>

                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <MenuItem component={Link} to="/modeles" button
                            classes={{
                                root: classes.menuItemRoot,
                                selected: classes.menuItemSelected
                            }}
                            selected={pathname === "/modeles"}>
                            Gestion Modèles
                </MenuItem>
                        <MenuItem component={Link} to="/versions" button
                            classes={{
                                root: classes.menuItemRoot,
                                selected: classes.menuItemSelected
                            }}
                            selected={pathname === "/versions"}>
                            Gestion Versions
                </MenuItem>
                        <MenuItem button component={Link} to="/colors"
                            classes={{
                                root: classes.menuItemRoot,
                                selected: classes.menuItemSelected
                            }}
                            selected={pathname === "/colors"}>
                            Gestion Couleurs
                </MenuItem>
                        <MenuItem component={Link} to="/options" button
                            classes={{
                                root: classes.menuItemRoot,
                                selected: classes.menuItemSelected
                            }}
                            selected={pathname === "/options"}>
                            Gestion Options
                </MenuItem>

                    </Collapse>

                    <MenuItem component={Link} to="/Simuler" classes={{
                        root: classes.menuItemRoot,
                        selected: classes.menuItemSelected
                    }} selected={pathname === "/Simuler"}>
                        <ListItemIcon>
                            <Icon className={classes.icon} >directions_car </Icon>
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
                            {this.state.sectionTitle}
                        </Typography>
                        <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
         
        {renderMenu}
        {renderMobileMenu}
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
                            classes={{paper: classes.drawerPaper, }}>
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer classes={{ paper: classes.drawerPaper, }} variant="permanent" open>
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
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(SideBar));