import React from "react";


function TodoItem(props) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        onChange={() => props.handleChange(props.item.id)} 
        onMouseover={() => props.handleMouseOver}
      />
      <p>{ props.item.text }</p>
    </div>
  );
}

export default TodoItem;