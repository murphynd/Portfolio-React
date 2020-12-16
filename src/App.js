import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
