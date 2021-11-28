import React from 'react';
import { TodoItem } from '../core/types';

type TodoRowProps = {
  todoItem: TodoItem;
  onTodoDelete: Function;
};

type TodoListProps = {
  todoList: Array<TodoItem>;
  onTodoDelete: Function;
};

class TodoRow extends React.Component<TodoRowProps> {
  constructor(props: TodoRowProps) {
    super(props);
    this.deleteSelf = this.deleteSelf.bind(this);
  }
  deleteSelf() {
    this.props.onTodoDelete(this.props.todoItem.id);
  }
  render() {
    return (
      <li>{this.props.todoItem.title} <button onClick={this.deleteSelf}>Delete</button></li>
    );
  }
}

class TodoList extends React.Component<TodoListProps> {
  render() {
    return (
      <ul>
        {this.props.todoList.map(item => <TodoRow key={item.id} todoItem={item} onTodoDelete={this.props.onTodoDelete} />)}
      </ul>
    );
  }
}

export default TodoList;
