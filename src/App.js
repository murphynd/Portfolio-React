import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
