import React from 'react';

class TodoRow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteSelf = this.deleteSelf.bind(this);
  }
  deleteSelf() {
    this.props.onTodoDelete(this.props.id);
  }
  render() {
    return (
      <li>{this.props.title} <button onClick={this.deleteSelf}>Delete</button></li>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map(item => <TodoRow key={item.id} id={item.id} title={item.title} onTodoDelete={this.props.onTodoDelete} />)}
      </ul>
    );
  }
}

export default TodoList;
