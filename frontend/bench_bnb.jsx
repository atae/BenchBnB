import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
//testing

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    //testing
    // window.user = {user: {username: 'steve2', password:'hunter2'}};
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    window.store = store;
});
