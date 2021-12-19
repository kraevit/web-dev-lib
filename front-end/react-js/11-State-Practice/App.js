import React, { Component } from "react";

// Challenge
// Given an incomplete class-based component without a constructor.
// add a constructor and initialize state to fix the broken component

class App extends Components {
  constructor() {
    super();
    // State must always be in constructor method
    // Initializing state :D
    this.state = {
      name: "Boss",
      age: 10
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
      </div>
    );
  }
}

export default App;