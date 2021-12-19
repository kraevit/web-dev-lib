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

    this.handleMouseOver = this.handleMouseOver(this);
  }

  handleChange(id) {

    this.setState((prevState) => {

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

  handleMouseOver() {
    console.log("HOVERED!");
  }

  render() {

    // 2. PASS THE METHOD DOWN TO THE TODOITEM COMPONENT@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! AS A PROP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WTFFFFFFFFFFFFFFFFFF

    const todoItem = this.state.todos.map((item) => <TodoItem key={item.id} item={item} handleChange={this.handleChange} handleMouseOver={this.handleMouseOver} />);

    return (

      <div className="todo-list">

        {todoItem}

      </div>

    );

  }

}

export default App;