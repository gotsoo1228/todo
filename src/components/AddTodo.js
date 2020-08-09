import React, { Component } from "react";
import "./AddTodo.css";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="todo_form">
        <form onSubmit={this.onSubmit} className="add_todo_form">
          <input
            type="text"
            name="title"
            className="form__input"
            placeholder="Add Todo ..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input type="submit" value="Submit" className="btn__submit" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
