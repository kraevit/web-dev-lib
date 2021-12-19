import React from "react"
import ReactDOM from "react-dom"

const App = () => {
  // const firstName = "Krasimir";
  // const lastName = "Kraev";

  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  // if (hours < 12) {
  //   timeOfDay = "morning";
  // } else if (hours >= 12 && hours < 17) {
  //   timeOfDay = "afternoon";
  // } else {
  //   timeOfDay = "night";
  // }

  switch (timeOfDay) {

    case (hours < 12):
      timeOfDay = "morning";
      break;

    case (hours >= 12 && hours < 17):
      timeOfDay = "afternoon";
      break;

    default:
      timeOfDay = "night";
      break;
  }

  return (
    // <h1>Hello firstName + " " + lastName!</h1>
    // <h1>Hello {firstName + " " lastName!}</h1>
    // <h1>Hello {`${firstName} ${lastName}!`}</h1>
    // <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
    <h1>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)