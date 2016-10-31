import React from "react";
import GreetingContainer from './greeting_container';

const App = (store) => {
  // console.log(store);
  return (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer/>
    {store.children}
  </div>
);};

export default App;
