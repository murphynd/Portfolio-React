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
            {" "}
            {/* you will need to duplicate the ul tag closure for good wrapping */}
            <CardItem
              src="images/den.png"
              text="have a seat"
              label="a cozy room"
              path="/about"
            />
            <CardItem
              src="images/tea.png"
              text="here is some tea"
              label="a hot cup"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
