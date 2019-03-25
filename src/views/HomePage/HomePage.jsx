    import React from 'react';
    import { connect } from 'react-redux';
    import LogOut from '../../components/logout/LogOut';
    import NavBar from '../../components/navbar/NavBar';
    import "./HomePage.css"
    import Home from '../../components/Home';
    import Contact from '../../components/Contact';
    import About from '../../components/About';
    import {LoginPage }from '../LoginPage/LoginPage.jsx';
    import { BrowserRouter ,NavLink,Router, Route ,Link, Switch} from 'react-router-dom';
    import routes from '../../routes/routes';
    import Header from '../../components/header/Header';
    import Paper from '@material-ui/core/Paper';
    import Divider from '@material-ui/core/Divider';
    import Grid from '@material-ui/core/Grid';
    import SideBar from '../../components/navbar/SideBar1'
    import Menu from '../../components/Menu'

    class HomePage extends React.Component {

        render() {
            const { user, users } = this.props;
            return (
    <BrowserRouter>
    <div >
        <Header></Header>
    <Grid container>
        <Grid item xs={2}>
            <Paper >
    <SideBar>
        </SideBar>       
        </Paper>
            </Grid>
            <Grid item xs={10}>
            <Paper>               
    {routes}</Paper>
            </Grid>
        </Grid>
                
                </div>
                </BrowserRouter>
            );
        }
    }

    function mapStateToProps(state) {
        const { users, authentication } = state;
        const { user } = authentication;
        return {
            user,
            users
        };
    }

    const connectedHomePage = connect(mapStateToProps)(HomePage);
    export { connectedHomePage as HomePage };