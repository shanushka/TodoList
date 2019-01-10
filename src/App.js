import React, { Component } from "react";

import Input from "./components/InputField";
import Tab from "./components/TabBar";
import TaskList from "./components/TaskList";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      todos: [
        { id: 1, value: "Clean the kitchen", done: false },
        { id: 2, value: "wash the car", done: true }
      ],
      count: 3
    };
  }

  changeInput = event => {
    this.setState({
      userInput: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = {
      id: this.state.count,
      value: this.state.userInput,
      done: false
    };

    let count = this.state.count;
    count++;
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({
      todos,
      userInput: "",
      count
    });
  };

  handleDelete = index => {
    const todos = this.state.todos;
    todos.pop(todos[index - 1]);
    this.setState({ todos });
  };

  handleComplete = index => {
    const todos = this.state.todos;
    todos[index - 1].done = !todos[index - 1].done;
    this.setState({ todos });
  };

  handleEdit = index => {
    // console.log("d", todos[index - 1].value);
    // userInput = todos[index - 1].value;
  };

  render() {
    return (
      <div className='App'>
        <h1>Todolist</h1>
        <Tab />
        <Input
          handleChange={this.changeInput}
          userInput={this.state.userInput}
          onSubmit={this.handleSubmit}
        />
        <TaskList
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
