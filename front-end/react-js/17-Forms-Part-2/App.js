import React, {Component} from "react";
 
// REACT DOCS ABOUT FORMS:
// https://reactjs.org/docs/forms.html

// FORMIC CHECK CHECK

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue"
    };

    this.handleChange = this.handleChange.bind(this);
    
  } // constructor()

  handleChange(event) {

    const {name, value, type, checked} = event.target;

    type == checkbox ? this.setState({[name]: checked}) : this.setState({[name]: value});

  } // handleChange

  render() {

    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
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

          {
            /*
            * Other useful form elements:
            *
            * <textarea /> element
            * <input type="checkbox" /> element
            * <select> and <option> elements
            */
          }

          <textarea value={"Some default value"}/>
          <textarea value={this.state.value} onChange={this.handleChange}/>

          <input 
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />

          <input 
            type="radio"
            name="gender"
            value="male"
            checked={this.state.value === "male"}
            onChange={this.handleChange}
          />

          <input 
            type="radio"
            name="gender"
            value="female"
            checked={this.state.value === "female"}
            onChange={this.handleChange}
          />

          <select 
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>

          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>

          <h2>You are a {this.state.gender}</h2>
          <h2>Your favorite colr is {this.state.favColor}</h2>

          <button>Submit</button>
        </form>
    );

  } // render()
} // App

export default App;