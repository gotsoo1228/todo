import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Layout/Header";
import AddTodo from "./components/AddTodo";
// import uuid from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1 + Math.random(),
        title: "Take out trash",
        completed: false,
      },
      {
        id: 1 + Math.random(),
        title: "Dinner with friend",
        completed: false,
      },
      {
        id: 1 + Math.random(),
        title: "Meet the Professor",
        completed: false,
      },
    ],
  };

  // Toggle
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: 1 + Math.random(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
