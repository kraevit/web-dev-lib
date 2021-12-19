/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and
mapped over it, to display the todo items

Eventually we'll wabt to be able to modify the data, which will only happen if we've "loaded" 
the data in the component's state

Challange: Change the <App /> component into a statefull class component and load the imported
'todosData' into state.

*/

import React, { Component } from "react";

import TodoItem from "./TodoItem"; 
import todosData from "./todosData";

// function App() {

//   const todoItems = todosData.map( item => <TodoItem key={item.id} item={item} /> );

//   return (

//     <div className="todo-list">

//       {todoItems}

//     </div>

//     )
// }

class App extends Component {

  constructor() {
    super();

    // LOAD DATA INTO THE STATE! yes!!!@!

    this.state = {
      // todos: []
      todos: todosData
    };
  }

  render() {
    const todoItems = 
      this.state.todos.map(item => <TodoItem key={item.id} item={item} />);
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;