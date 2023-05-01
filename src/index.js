import React from "react";
import ReactDOM from "react-dom";
import contacts from "./contacts";
import App from "./components/App";
ReactDOM.render(
  <div>
    <App
      name={contacts[0].name}
      img={contacts[0].imgURL}
      tel={contacts[0].phone}
      email={contacts[0].email}
    />
    <App
      name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].phone}
      email={contacts[1].email}
    />
    <App
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
