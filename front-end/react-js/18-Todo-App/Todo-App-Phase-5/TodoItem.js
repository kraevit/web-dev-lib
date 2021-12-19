// Challange: Get rid of our warning about not having onChange on our input, For now,
// the function that runs onChange can simply console.log something.

import React from "react";

function onChangeHandler() {
  console.log("Changed!");
}

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" onChange={onChangeHandler} />
      <p>{ props.item.text }</p>
    </div>
  );
}

export default TodoItem;