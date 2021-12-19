// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the followihg UI:
  // a. An h1 with your name
  // b. A para with a little blurb about yourself
  // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that func component to the browser
// Extra challange: learn on your own (Google!) how you can add some style to your page.

import React from "react";
import ReactDOM from "react-dom";

// import MyInfo from "./MyInfo.js";
import MyInfo from "./components/MyInfo";

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
);
