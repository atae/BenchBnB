import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import {requestBenches} from "./actions/bench_actions";
import {fetchBenches} from "./util/bench_api_util";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {currentUser: window.currentUser, errors: []}
    };
    store = configureStore(preloadedState);
    console.log(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);
    window.store = store;
    //testing
    // window.user = {user:{username:"steve2", password:"hunter2"}};
    window.requestBenches = requestBenches;
    window.fetchBenches = fetchBenches;
    // window.store.dispatch(login(window.user));
});
