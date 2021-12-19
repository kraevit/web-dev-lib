import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unreadMessages: [
        "Call your mom!",
        "New spam email available. ALl links are definetely safe to click. :D!"
      ]
    };
  }

  // &&
  // true && false

  // EXPLANATION:
  // READ THIS !
  // SUDO CODE
  // if this.state.unreadMessages arr have 2 elements inside
  // the ouput will be: You have 2 unread messages
  // if this.state.unreadMessages arr have 0 elements
  // the output will be: You have 0 unread message

  // We can avoid that using && operator to render something if left side is true or NOTHING
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // render() {
  //   return (
  //     <div className="my-app">
  //       <h2> You have {this.state.unreadMessages.length} unread messages </h2>
  //     </div>
  //   );
  // }


  render() {
    return (
      <div className="my-app">
        {
          this.state.unreadMessages.lenght > 0 &&
          <h2>You have {this.state.unreadMessages.lenght} unread messages!</h2>
        }
      </div>
    );
  }

}

export default App;