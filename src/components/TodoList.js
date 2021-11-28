import React from 'react';

class TodoRow extends React.Component {
  render() {
    return (
      <li>{this.props.title}</li>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map(item => <TodoRow key={item.id} title={item.title} />)}
      </ul>
    );
  }
}

export default TodoList;
