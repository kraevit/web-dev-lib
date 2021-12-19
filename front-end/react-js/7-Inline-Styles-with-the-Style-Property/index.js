import React from "react";
import ReactDOM from "react-dom";

function App() {

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: "16px"
  };

  if ( hours < 12 ) {
    timeOfDay = "Morning";
    styles.color = "lightblue";
  } else if ( hours >= 12 && hours < 17 ) {
    timeOfDay = "Afternoon";
    styles.color = "yellow";
  } else {
    timeOfDay = "Night";
    styles.color = "black";
  }

  return (
/*    <h1 
      style={{
        color: "orange",
        backgroundColor: "red"
      }}>
      Good { timeOfDay }
    </h1>
*/
    <h1 style={ styles }>Good { timeOfDay } !</h1>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);