import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import home from './assets/icons/home.png'
import users from './assets/icons/users.png'
import fabricant from './assets/icons/fabricant.png'
import loggs from './assets/icons/loggs.png'



ReactDOM.render(<App/>, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
