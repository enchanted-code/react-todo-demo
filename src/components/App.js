import React from 'react';
import { getRandomId } from '../core/helpers'
import AddForm from './AddForm';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);

    this.state = {
      todoList: []
    }
  }

  findTodoById(todoId) {
    for (let i = 0; i < this.state.todoList.length; i++) {
      const element = this.state.todoList[i];
      if (element.id === todoId) { return i; }
    }
    return -1;
  }

  handleTodoChange(title, description) {
    const todoId = getRandomId();
    this.state.todoList.push({
      id: todoId,
      title: title,
      description: description
    });
    this.setState({ todoList: this.state.todoList });
    console.debug("todo added with id: " + todoId);
  }

  handleTodoDelete(todoId) {
    let foundIndex = this.findTodoById(todoId);
    if (foundIndex !== -1) {
      this.state.todoList.splice(foundIndex, 1);
      this.setState({ todoList: this.state.todoList });
      console.debug("deleted todo with id: " + todoId);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddForm onTodoChange={this.handleTodoChange} />
        <TodoList todoList={this.state.todoList} onTodoDelete={this.handleTodoDelete} />
      </div>
    );
  }
}


export default App;
