import React from "react";

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Get the data i need to correctly display
  }

  // DEPRECATED !
  componentWillReceiveProps() {
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

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