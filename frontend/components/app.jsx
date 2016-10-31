import React from "react";
import GreetingContainer from './GreetingContainer';

const App = ({children}) => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
