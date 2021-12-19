import React, {Component} from "react";

// https://developer.mozila.oprg/en-US/docs/Web/API/WindowOrWorkerGlobalScrope/fetch
// https://swapi.co/ ( STAR WARS API )

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
      character: {}
    }
  }

  componentDidMount() {
    
    // GET DATA FROM SOMEWHERE HERE
    
    // console.log("Hii!");

    this.setState( { loading: true} );

    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      })

    // SAVE DATA IN THE STATE OR IT WILL DISSAPPPEAR!
  }

  render() {

    const text = this.state.loading ? "Loading...." : this.state.character.name;
    
    return (
      <div>
        <p>{ text }</p>
      </div>
    );
  }
}

export default App;