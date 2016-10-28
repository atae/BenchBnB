import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
//testing
import {signup, login, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    window.user = {user: {username: 'steve2', password:'hunter2'}};
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
    //testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = store;
});
