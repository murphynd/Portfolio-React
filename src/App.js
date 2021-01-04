import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
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
          <Route path="/Work" component={Work} />
          <Route
            path="/TapRoomCode"
            component={() => {
              window.location.href =
                "https://github.com/murphynd/Taproom-with-Redux";
              return null;
            }}
          />
          <Route
            path="/CoinCode"
            component={() => {
              window.location.href = "https://github.com/murphynd/coin";
              return null;
            }}
          />
          <Route
            path="/PizzaPlanet"
            component={() => {
              window.location.href = "hhttps://github.com/murphynd/PizzaPlanet";
              return null;
            }}
          />
          <Route
            path="/Galactic"
            component={() => {
              window.location.href =
                "https://github.com/murphynd/Super-Galactic-Age-Calculator";
              return null;
            }}
          />
          <Route
            path="/Bakery"
            component={() => {
              window.location.href = "https://github.com/murphynd/Bakery";
              return null;
            }}
          />
          <Route
            path="/PierreTracker"
            component={() => {
              window.location.href =
                "https://github.com/murphynd/Vendor-and-Order-Tracker-for-Pierre";
              return null;
            }}
          />
          <Route
            path="/HairSalon"
            component={() => {
              window.location.href = "https://github.com/murphynd/HairSalon";
              return null;
            }}
          />
          <Route
            path="/Factory"
            component={() => {
              window.location.href = "https://github.com/murphynd/Factory";
              return null;
            }}
          />
          <Route
            path="/ParksAPI"
            component={() => {
              window.location.href = "https://github.com/murphynd/ParksLookUp ";
              return null;
            }}
          />
          <Route
            path="/Auklo"
            component={() => {
              window.location.href = "https://github.com/murphynd/AudioProject";
              return null;
            }}
          />
          <Route
            path="/Stocks"
            component={() => {
              window.location.href = "https://github.com/murphynd/stock-market";
              return null;
            }}
          />
          <Route
            path="/Capstone"
            component={() => {
              window.location.href = "https://thump.vercel.app/";
              return null;
            }}
          />
          <Route
            path="/Cat"
            component={() => {
              window.location.href =
                "https://please-walk-drruau5ec.vercel.app/";
              return null;
            }}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
