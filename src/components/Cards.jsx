import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>New Work</h1>
      <div className="cards__contianer">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {" "}
            {/* you will need to duplicate the ul tag closure for good wrapping */}
            <CardItem
              src="images/den.png"
              text="Explore my latest work"
              label="Student work from Epicodus"
              path="/work"
            />
            <CardItem
              src="images/thump.png"
              text="Play with ThumP"
              label="Make some sick beats!"
              path="/capstone"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
