import React from 'react';
import { Link } from "react-router";

const Greeting = (props) => {
  // debugger
  if (props.currentUser !== null) {
    return (
      <div>
        <h2>Welcome, {props.currentUser.username}!</h2>
        <button onClick={props.logout}>Logout</button>
      </div>
    );
  } else {
    return (<div>
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </div>
  );
  }
};

export default Greeting;
