/*
  Let's make it so our checkbox can actually mark our todo as complete or incomplete!
  This challange is a little more involved than some of the past ones. Check the comments in the code for some help on accomplishing this one.

  Challange:
    
    1. Create an event handler in the App component for when the checkbox is clicked ( which is an 'onChange' event)
      a. This method will be trickest part. Check the comments in the stubbed-out method below
      for some pseudocode to help guide you trough this part
    2. Pass the method down to the TodoItem component
    3. In the TodoItem component, make it so when the 'onChange' event happens, it calls the
    'handleChange' method and passed the id of the todo into the functionnnnn

*/ 

import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData
    }
    this.handClick = this.handClick.bind(this);
  }

  handleChange(id) {
    // Update state so that the item with the given id flips 'completed' from false to true or vise versa
    // Remember not to modify prevState directly, but instead to return a new version of state
    // with the change you want included in that update. (Think how you would use '.map' method to do this)

    // TO COMPLETE THIS FOLLOW THIS LINES ONE BY ONE

    // 1.
    // console.log("Changed", id);

    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed; // flip here
        }
        return todo; // adds todo to the updatedTodos arr
      });
      return {
        todos: updatedTodos // update todos arr
      }
    });
  }

  render() {
    // 2. Pass the method down to the TodoItem component
    const todoItem = this.state.todos.map(item => <TodoItem key={ item.id } item={ item } handleChange={this.handleChange} />);
    return (
      <div className="todo-list">
        { todoItem }
      </div>
    );
  }
}

export default App;