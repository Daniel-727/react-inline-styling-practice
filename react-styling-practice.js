//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

/*CREATING CONSTANTS TO USE INSIDE THE <h1>*/
const morning = "Good morning"; 
const afternoon = "Good Afternoon";
const evening = "Good Evening";

/*CREATING CONSTANTS TO CHANGE THE STYLE OF <h1>*/
const morningStyle = { color: "red" };
const afternoonStyle = { color: "green" };
const eveningStyle = { color: "blue" };

let date = new Date();
let hour = date.getHours();
let greeting; //what will actually be passed into the h1, and will changed based on current hour
let currentStyle;// what will be passed into style=

if (0 <= hour && hour < 12) { //if the hour is between 0am-12pm then it should be morning and the <h1> should be red
  greeting = morning;
  currentStyle = morningStyle;
} else if (12 <= hour && hour < 18) { //if the hour is between 12pm-6pm then it should be the afternoon and the <h1> should be green
  greeting = afternoon;
  currentStyle = afternoonStyle;
} else { //if the hour is between 6pm-12am then it should be the evening and the <h1> should be blue
  greeting = evening;
  currentStyle = eveningStyle;
}

ReactDom.render(
  <h1 style={currentStyle} className="heading">
    {greeting}
  </h1>,
  document.getElementById("root")
);
