import React from 'react';
import { getRandomId } from '../core/helpers'
import AddForm from './AddForm';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleTodoChange = this.handleTodoChange.bind(this);

    this.state = {
      todoList: []
    }
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

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddForm onTodoChange={this.handleTodoChange} />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}


export default App;
