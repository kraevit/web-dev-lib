// Setup a React app from scratch
// Render an <App /> component
  // App should be in its own file
// App should render 5 <Joke /> components
  // Each Joke should receive a "question" prop and a "punchline" prop
  // and render those however you'd like

// EXTRA CREDIT:
// Some jokes are only a punch line with no questions:
 // E.g.: "It's hard to explain puns to kleoptomaniacs because the always take things literally."
// If you don't pass in a "question" prop, how might you make it only show the punchline instead
// Spend time practicing the style of your Joke component.

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);



