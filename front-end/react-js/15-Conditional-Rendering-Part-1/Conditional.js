import React, { Component } from "react";

function Conditional(props) {
  
  // console.log(props.isLoading);
  // return (
  //   <h1>Temp</h1>
  // );


  // Conditional Rendering

  // if ( props.isLoading === true ) {
  //   return (
  //     <h1>Loading</h1>
  //   );
  // } else {
  //   return (
  //     <h1>Some cool stuff about conditional rendering</h1>
  //   );
  // }

  // We can ommit else here like this

  // if (props.isLoading) {
  //   return (
  //     <h1>Loading ... </h1>
  //   );
  // }
  // return (
  //   <h1>Some cool stuff about conditional rendering</h1>
  // );
}

// Also we can use TERNARY operator //// condition ? true : false

// return (
//   // this code must be in the return block
//   <div>

//     <h1>Navbar</h1>

//     { props.isLoading ? <h1>Loading</h1> : <h1>Some coold stuff about conditional rendering</h1> }

//     <h1>Footer</h1>

//   </div>

// );


 // IMPORTANT: IF CONDITIONAL RENDERING IS HANDLED BY APP>JS COMPONENT
 // WE CAN SIMPLIFY CODE HERE BY RENDERING ONLY WHAT WE NEED

 function Conditional() {
  return <h1> Some cool stuff about conditional rendering</h1>
 }

export default Conditional;
