import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hey, I am Natalie</h1>
      <p>Web Developer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn-large"
        >
          Grab a cup
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn-large"
        >
          play with a cat
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
