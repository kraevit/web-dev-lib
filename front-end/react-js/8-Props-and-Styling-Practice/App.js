import React from "react";
import Joke from "./Joke"

function App() {

  return (

    <div className="jokes-list">

      <Joke 
        question="What is this 1?"
        punchLine="No Idea 1!" 
      />

      <Joke 
        question="What is this 2?"
        punchLine="No Idea 2!" 
      />

      <Joke 
        question="What is this 3?"
        punchLine="No Idea 3!" 
      />

      <Joke 
        question="What is this 4?"
        punchLine="No Idea 4!" 
      />

      <Joke 
        question="What is this 5?"
        punchLine="No Idea 5!" 
      />

    </div>

  );

}

export default App;