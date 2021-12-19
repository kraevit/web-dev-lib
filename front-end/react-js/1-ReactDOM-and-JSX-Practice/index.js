// Objective: Fill in the boilerplace React code required to render an 
// unordered list (<ul>) to the page. The list should contain 3 list items 
// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <ul>
    <li>list item 1</li>
    <li>list item 2</li>
    <li>list item 3</li>
  </ul>,
  document.getElementById("root")
);

