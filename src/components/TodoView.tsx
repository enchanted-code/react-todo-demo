import React from "react";
import { TodoItem } from "../core/types";

type TodoViewProps = {
  todoItem: TodoItem;
  onCloseClick: Function;
};

class TodoView extends React.Component<TodoViewProps> {
  render() {
    return (
      <div>
        <h3>{this.props.todoItem.title}</h3>
        <p>{this.props.todoItem.description}</p>
        <button onClick={() => { this.props.onCloseClick() }}>Close</button>
      </div>
    );
  }
}

export default TodoView;
