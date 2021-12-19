import React, {Component} from "react";
 
// REACT DOCS ABOUT FORMS:
// https://reactjs.org/docs/forms.html

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    
  } // constructor()

  handleChange(event) {


    // TO AVOID REALLY HARD TO DEBUG BUGSSSsssZzSS

    // PULL OUT THE VALUES U NEED FROM event.target before use them in the state
    // HOW TO DO THIS ?
    // USE DESTRUCTURING :) !!!!
    const {name, value} = event.target;

    this.setState({
      // NOTE HERE>> JS COMPUTED PROPERTY VALUES OMG!
      // [event.target.name]: event.target.value

      // TO AVOID REALLY HARD TO DEBUG BUGSSSsssZzSS
      // USE THIS INSTEAD of [event.target.name]: event.target.value
      [name]: value
    });
  } // handleChange

  render() {

    return (
        <form>
          <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName" 
            placeholder="First Name" 
            onChange={this.handleChange}
          />
          <br/>
          <input 
            type="text" 
            value={this.state.lastName} 
            name="lastName" 
            placeholder="Last Name" 
            onChange={this.handleChange}
          />
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
        </form>
    );

  } // render()
} // App

export default App;