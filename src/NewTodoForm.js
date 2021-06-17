import React, { Component } from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({
      task: "",
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <label htmlFor="task">New Todo</label>
        <input
          placeholder="Write your next Todo.."
          name="task"
          type="text"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo!</button>
      </form>
    );
  }
}

export default NewTodoForm;
