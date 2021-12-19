import React from "react";

// function Joke(props) {
//   if (!props.hasOwnProperty(question)) {
//     return (
//       <div className="Joke">
//         <p>answer: {props.punchLine}</p>
//       </div>
//     );
//   } else {
//     return (
//       <div className="Joke">
//         <p>question: {props.question}</p>
//         <p>answer: {props.punchLine}</p>
//       </div>
//     );
//   }
// }

funtion Joke(props) {
  
  const styles = {};

  if (props.hasOwnProperty("question")) {
    styles.display = "block"
  } else {
    styles.display = "none";
  }

  // props.hasOwnProperty("question") ? style.display = "block" : style.display = "none";

  return (
    <div className="joke">
      <p style={{styles}}>Question: {props.question}</p>
      <p>Answer: {props.punchLine}</p>
    </div>
  )

  // ORrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
  /////// Conditional Styles

  return (

    <div className="joke">
      
      <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
      
      <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
      
      
      <p>Answer: {props.answer}</p>
    </div>
  )

}



export default Joke;