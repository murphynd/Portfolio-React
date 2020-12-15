import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>check out all of my Tea!</h1>
      <div className="cards__contianer">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/den.png" text="" label="" path="/about" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
