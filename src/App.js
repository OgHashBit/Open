
import React from 'react';
// import NavBar from "./components/NavBar";
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./First/store";
import About from "./About/about";
import Claim from "./Contact/claim";

function App() {
  return (
      <div className="App">
          <div className="wrapper">
            {/* <NavBar /> */}
            <Main />
            <About />
            <Claim />
          </div>
      </div>
  );
}

export default App;

            // <Main />
            // <About />
            // <Claim />
