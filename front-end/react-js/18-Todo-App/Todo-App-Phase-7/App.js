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
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed; // flip here
        }
        return todo; // adds todo to the updatedTodos arr
      });
      return {
        todos: updatedTodos // update todos arr state
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