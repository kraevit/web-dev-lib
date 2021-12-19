import React, {Component} from "react";


/*
Challange:

Given a functional component:

1. Follow the steps necessary to add state to it,
  // class-based component
  // constructor method
2. Have state keep track of whether the user is logged in or not
  // isLoggedIn: Boolean( true or false )
3. Add a button that logs the user in/out
  // event listener (onClick)
  a. extra challange - make the button display "log in" if they're not logged in and "log out" if they are
  // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not. 
  // Conditional Rendering
*/

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      isLoggedIn: false,
      message: ""

    }

    this.handleClick = this.handleClick.bind(this);

  }


  // WRONG CODE

  // handleClick() {

  //   if ( !this.state.isLoggedIn ) {

  //     this.setState({
  //       isLoggedIn: true,
  //       message: "Logged in"
  //     });

  //   } else {

  //     this.setState({
  //       isLoggedIn: false,
  //       message: "Logged out"
  //     });

  //   }
  // }

  // RIGHT CODE

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    });
  }

  // WRONG CODE

  // render() {

  //   return (

  //     <div className="my-app">

  //       <Button onClick={this.handleClick} isLoggedIn={this.state.isLoggedIn}></Button>

  //       <p>{this.state.message}</p>

  //     </div>
  //   );
  // }

  // RIGHT CODE
  render() {

    // LOGIC MUST be INSIDE RENDER

    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out";

    return (
      <div>
        <button onClick={this.handleClick}> {buttonText} </button>
        <h1> { displayText } </h1>
      </div>
    );
  }
}
