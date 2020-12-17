import React from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

function Projects() {
  return (
    <div className="cards">
      <h1>Check out my latest work</h1>

      <div className="cards__contianer">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* you will need to duplicate the ul tag closure for good wrapping */}
            <ProjectItem
              src="images/taproom.png"
              title="Tap Room "
              text=" An app built with React with NoSQL/Redux to track keg inventory and pint sales. 
               It uses JSX, props, and prop types.
              - Redux is used for all application state.
              - Jest is used to test all reducers."
              label="React with NoSQL/Redux"
              path="/TapRoomCode"
            />
            <ProjectItem
              src="images/coin.png"
              title="Exchange Rate"
              text=" An app built with javascript adn the exhangerate-api to convert usd to other currency"
              label="Asynchrony and APIs in JS"
              path="/CoinCode"
            />
            <ProjectItem
              src="images/pizza.png"
              title="Pizza Planet"
              text="A simple tool to order Pizza"
              label="Object-Oriented JavaScript"
              path="/PizzaPlanet"
            />
          </ul>
          <ul className="cards__items">
            <ProjectItem
              src="images/teatime.jpg"
              title="Galactic Calculator"
              text="This app determines a user's age based on a planet's solar years."
              label="Test Driven Development in JS"
              path="/Galactic"
            />
            <ProjectItem
              src="images/Bakery.png"
              title="Bakery - A C# console application for a bakery"
              text=" When the user runs the application, they should receive a prompt with a welcome message along with the cost for both Bread and Pastry. A user should be able to specify how many loaves of Bread and how many Pastrys they'd like. The application will return the total cost of the order."
              label="Test-Driven Development with C#"
              path="/Bakery"
            />
            <ProjectItem
              src="images/orderTracker.png"
              title="Vendor/Order Tracker"
              text="A program for Vendors to catalog and organize Orders."
              label="Basic Web Applications in C#"
              path="/PierreTracker"
            />
          </ul>
          <ul className="cards__items">
            <ProjectItem
              src="images/HairSalon.png"
              title="HairSalon"
              text=" built in C#, A website where you Can Add Sylists and Clients to a database."
              label="C# and MySQL"
              path="/HairSalon"
            />
            <ProjectItem
              src="images/teatime.jpg"
              title="The Factory"
              text=" An application to keep track of their machine repairs. MVC web application to manage their engineers, and the machines they are licensed to fix."
              label="Many-to-many Database Relationships"
              path="/Factory"
            />
            <ProjectItem
              src="images/TravelAPI.png"
              title="Parks API"
              text="An API that functions as catalog for National & State Parks in the USA. It utilizes RESTful principles, Swagger and has integrated authentication via JWT Authentication to keep the API Read-Only for all users except administrators."
              label="C# API"
              path="/ParksAPI"
            />
          </ul>
          <ul className="cards__items">
            <ProjectItem
              src="images/Auklo.png"
              title="Auklo "
              text="Procedurally generated ambient music maker that has an infinite timeline of sound built using C#/Javascript/MySql. Using different filters and effects, You are able to create and save your own ambient music."
              label="Team Project in C# and Tone.js"
              path="/Auklo"
            />
            <ProjectItem
              src="images/teatime.jpg"
              title="WatchList"
              text=" Watch List provides financial data in a clear easy to read format. Powered by IEX Cloud, users can navigate easily to gain the latest information on companies of interest. All the data you need to know in a easy to read and search format."
              label="Team Project in JavaScript"
              path="/Stocks"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
