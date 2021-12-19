import React from "react";

import Joke from "./Joke"
import jokesData from "./jokesData";

function App() {

  // array.map(function(num){ runs on every single item in the array and returns NEW ARRAY })

  // return (
  //   <div className="jokes-list">
  //     <Joke 
  //       punchLine="It's hard to explain puns to kleptomaniacs because the always take things literally." 
  //     />
  //     <Joke 
  //       question="What's the best thing about Swtizerland?"
  //       punchLine="I don't know, but the flag is a big plus!"
  //     />
  //     <Joke 
  //       question="Did you hear about the mathematician who's afraid of negative numbers?"
  //       punchLine="He'll stop at nothing to avoid them!" 
  //     />
  //     <Joke 
  //       question="Hear about the new restaurant called Karma?"
  //       punchLine="There's no menu: You get what you deserve." 
  //     />
  //   </div>
  // );

  // all of the ABOVE WRITTEN IN ONE SINGLE FUCKING LINE :D :D :D :D :D :D
  // MAPPING COMPONENTS ROCKS!

  const jokesComponent = jokesData.map(joke => 
    <Joke 
      key={joke.id} 
      question={joke.question} 
      punchLine={joke.punchLine} 
    /> 
  );

  return (
    <div>
      {jokesComponent}
    </div>
  )
}

export default App;