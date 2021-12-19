import React from "react";

funtion Joke( props ) {
  return (
    <div className="joke">
      <p style={{ display: !props.question && "none" }}>Question: { props.question }</p>      
      <p>Answer: { props.answer }</p>
    </div>
  );
}

export default Joke;