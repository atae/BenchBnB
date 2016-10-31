import React from 'react';
import { Link } from "react-router";

const Greeting = (props) => {
  // if (props.currentUser) {
  //   return (<div>
  //     <h2>Welcome, {props.currentUser}!</h2>
  //     <button onClick={props.logout}>Logout</button>
  //   </div>);
  // } else {
    return (<div>
      <ul>
        <li><Link to="/#/signup">Sign Up</Link></li>
        <li><Link to="/#/login">Log In</Link></li>
      </ul>
    </div>
  );
  
}

export default Greeting;
