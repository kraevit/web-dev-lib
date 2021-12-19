import React from "react";

function handleClick() {
  console.log("CLICKED!");
}

function App() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" />
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// <button onClick={() => console.log("clicked")}>Click me</button>
// <button onClick="myFunction()">Click me</button>  
// <button onMouseOver="myFunction()">Click me</button>  

export default App;