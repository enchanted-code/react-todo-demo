import React from 'react';
import { TodoItem } from '../core/types';
import Modal from "./Modal";
import TodoView from './TodoView';

type TodoRowProps = {
  todoItem: TodoItem;
  onTodoDelete: Function;
  onTodoClick: Function;
};

type TodoListProps = {
  todoList: Array<TodoItem>;
  onTodoDelete: Function;
};

type TodoListState = {
  currItem?: TodoItem;
};

class TodoRow extends React.Component<TodoRowProps> {
  constructor(props: TodoRowProps) {
    super(props);
    this.deleteSelf = this.deleteSelf.bind(this);
    this.clickSelf = this.clickSelf.bind(this);
  }
  deleteSelf() {
    this.props.onTodoDelete(this.props.todoItem.id);
  }
  clickSelf() {
    this.props.onTodoClick(this.props.todoItem);
  }
  render() {
    return (
      <li>
        {this.props.todoItem.title}
        <button onClick={this.clickSelf}>Open</button>
        <button onClick={this.deleteSelf}>Delete</button>
      </li>
    );
  }
}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);
    this.state = { currItem: undefined };
    this.handleShowView = this.handleShowView.bind(this);
    this.handleHideView = this.handleHideView.bind(this);
  }
  handleShowView(todoItem: TodoItem) {
    console.debug("open todo view modal");
    this.setState({ currItem: todoItem });
  }
  handleHideView() {
    console.debug("close todo view modal");
    this.setState({ currItem: undefined });
  }
  render() {
    const viewModal = this.state.currItem ? (
      <Modal>
        <TodoView todoItem={this.state.currItem} onCloseClick={this.handleHideView} />
      </Modal>
    ) : null;
    return (
      <>
        <ul>
          {this.props.todoList.map(item => <TodoRow key={item.id} todoItem={item} onTodoDelete={this.props.onTodoDelete} onTodoClick={this.handleShowView} />)}
        </ul>
        {viewModal}
      </>
    );
  }
}

export default TodoList;
