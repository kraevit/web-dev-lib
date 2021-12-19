import React from "react";

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // New Lifecycle Methods in place of the deprecated ones
  // Use documentation
  
  static getDerivedStateFromProps(props, state) {
    // return the new, updated state based upon props
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
  }

  

  componentDidMount() {
    // Get the data i need to correctly display
  }


  // componentWillMount() {}


  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  // componentWillUpdate() {}

  componentWillUnmount() {
    // teardown or cleanup your code before comment disappears
    // E.g : remove event listener
  }

  render() {
    return (
      <div className="my-app">
        Code goes here ...
      </div>
    )
  }
}

export default App;