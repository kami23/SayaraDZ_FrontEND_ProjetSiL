    import React from 'react';
    import { connect } from 'react-redux';
    //import LogOut from '../../components/logout/LogOut';
    //import NavBar from '../../components/navbar/NavBar';
    import "./AdminPage.css"
    //import {LoginPage }from '../LoginPage/LoginPage.jsx';
    import { BrowserRouter} from 'react-router-dom';
    import routes from '../../routes/routes';
    //import Header from '../../components/header/Header';
    import Paper from '@material-ui/core/Paper';
    //import Divider from '@material-ui/core/Divider';
    import Grid from '@material-ui/core/Grid';
    import SideBar from '../../components/navbar/SideBar2'

    class AdminPage extends React.Component {

        render() {
         //   const { user, users } = this.props;
            return (
    <BrowserRouter>
    <div >
    <Grid container>
        <Grid item xs={2}>
            <Paper className="paper" >
        <SideBar>
        </SideBar>       
        </Paper>
            </Grid>
            <Grid item xs={10} className="mainApp">
        {routes}
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

    const connectedAdminPage = connect(mapStateToProps)(AdminPage);
    export { connectedAdminPage as AdminPage };