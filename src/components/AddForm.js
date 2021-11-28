import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "" };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    this.props.onTodoChange(this.state.title, this.state.description);
    this.setState({ title: "", description: "" });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title: <input type="text" value={this.state.title} onChange={this.handleTitleChange} required /></label>
        <label>Description: <textarea value={this.state.description} onChange={this.handleDescriptionChange}></textarea></label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddForm;
