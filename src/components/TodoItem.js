import React from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todo_item">
        <p
          style={{
            textDecoration: this.props.todo.completed ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            className="btn__x"
            onClick={this.props.delTodo.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
