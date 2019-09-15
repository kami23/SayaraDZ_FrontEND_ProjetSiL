import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute2 = ({ component: Component, ...rest }) => (
    
    <Route {...rest} render={props => (
       (localStorage.getItem('user') && localStorage.getItem('user').admin) ?
            <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )

} />
)

