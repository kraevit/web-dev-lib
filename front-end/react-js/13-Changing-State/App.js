import React, { Component } from "react";


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    // BIND IT FIRST
    this.handleClick = this.handleClick.bind(this);
  }

  // PUT AS MANY METHODS AS YOU WANT HERE BETWEEN constructor() and render() !!!!!!!!!!!!!!

  handleClick() {
    
    // console.log("I'm working!");

    // DO NOT MODIFY STATE DIRECTLY
    // this.state.count++    !!!!!!!!!!!!! NEVER DO THIS !!!!!!!!!!!!!!!! 

    // Use setState() method instead
    
    // this.setState({ count: 1}); 
    // OUTPUT: ...TypeError: Cannot read property 'setState' of undefined (/App.js) 

    // Anytime you use a method wich uses setState() you must BIND IT FIRST inside constructor()!

    // this.setState({count: 1});  use litttterall object(this.setState({OBJ})) if you dont care what were the values of the previous state

    // IF YOU WANT TO KNOW THE PREVIOUS STATE USE THIS INSTEAD
    this.setState((prevState) => {
      return {
        // count: prevState.count++ ///// DO NOT DO THIS DON"T MODIFY STATE DIRECTLY

        // USE THIS INSTEAD
        count: prevState.count + 1
      }
    });
  }

  render() {
    // JSX code here
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.handleClick}>Change!</button>
      <ChildComponent count={this.state.count} />
    </div>
  }
}

export default App;