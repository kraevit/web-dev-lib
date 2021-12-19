import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes" // Initial data ( Default )
    };
  }

  render() {
    return (
      <div>
        <h1>Is state important to know? {this.satate.answer}</h1>
        //// HOW WE PASS STATE DOWN TO A CHILD COMPONENT?
        //// OFC USING PROPS OMG! :D
        <ChildComponent answer={this.state.answer} />
      </div>
    );
  }
}