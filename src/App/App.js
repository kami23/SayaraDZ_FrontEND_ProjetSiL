import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_util';
import { HomePage } from '../views/HomePage';
//import { AdminPage } from '../views/AdminPage/AdminPage';
//import { Modele } from '../components/modeles/mod'
import {Modele} from '../components/modeles/modele.component'
import { LoginPage } from '../views/LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <div style={{backgroundImage:'/assets/bg12.svg'}}>
                        <Route path="/login" component={LoginPage} />
                        </div>
                    </div>
                </Router>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return { alert };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 