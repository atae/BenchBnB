import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import {signup, login, logout} from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    window.user = {user: {username: 'steve2', password:'hunter2'}};
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = store;
    window.store.dispatch(login(window.user));
    ReactDOM.render(<Root store={store} />, root);
    //testing
});
