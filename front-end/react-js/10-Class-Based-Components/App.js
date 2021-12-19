import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>{props.whatever}</h1>
//     </div>
//   )
// }

class App extends React.Component {

  yourMethodHere() {

  }

  render() {

    // const style = this.yourMethodHere();

    // Any Display Logic better come inside render method before return statement.

    return (
      <div>
        <h1>{ this.props }</h1>
      </div>
    )
  }
}

export default App;