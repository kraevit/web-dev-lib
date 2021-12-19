// IMPORTANT
// IMPORTANT
// IMPORTANT: THE APP COMPONENT SHOULD BE THE ONE IN CHARGE OF CONDITIONAL RENDERING

import React, { Component } from "react";
import Condition from "./Conditional";

class App extends React {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() { 
    
    // Fake API call
    setTimeOut(()=> {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  // render() {
  //   return (
  //     <div className="my-app">
  //       <Conditional isLoading={this.state.isLoading} />
  //     </div>
  //   )
  // }


  // IMPORTANT: condition ? true : false
  render() {
    return (
      <div>

        {

          this.state.isLoading ? 

          <h1>Loading</h1> :

          <Conditional />

        }

      </div>
    );
  }

}
