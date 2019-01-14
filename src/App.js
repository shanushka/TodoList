import React, { Component } from "react";

import Input from "./components/InputField";
import Tab from "./components/TabBar";
import TaskList from "./components/TaskList";
import "./App.css";
import { networkInterfaces } from "os";
class App extends Component {
  constructor() {
    super();
    const storageData = window.localStorage.getItem("todoData");
    const todos = storageData ? JSON.parse(storageData) : [];

    this.state = {
      searchField: "",
      active: "Home",
      userInput: "",
      todos: todos
    };
  }

  changeInput = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = {
      id: Date.now(),
      value: this.state.userInput,
      done: false
    };
    const todos = [...this.state.todos, newTodo];
    this.setState({
      todos,
      userInput: ""
    });
  };

  handleEdit = (evt, index, handleClick) => {
    console.log("d", index);
    evt.preventDefault();
    var todos = [...this.state.todos];
    var indexx = todos.findIndex(todo => todo.id === index);
    todos[indexx].value = this.state.userInput;
    todos[indexx].done = this.state.todos[indexx].done;
    this.setState({ todos });
    handleClick();
  };
  handleDelete = index => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== index;
    });
    this.setState({ todos });
  };

  handleComplete = index => {
    const todos = this.state.todos;
    var indexx = todos.findIndex(todo => todo.id === index);
    todos[indexx].done = !todos[indexx].done;
    this.setState({ todos });
  };

  activeStage = active => {
    this.setState({
      active
    });
  };
  changeSearch = evt => {
    this.setState({
      searchField: evt.target.value
    });
  };
  handleSearch = evt => {
    this.setState({
      searchField: ""
    });
    evt.preventDefault();
  };
  render() {
    window.localStorage.clear();
    window.localStorage.setItem("todoData", JSON.stringify(this.state.todos));

    return (
      <div className='App clearfix'>
        <div className='header clearfix'>
          <h1>Todolist</h1>
          <Input
            value='search'
            userInput={this.state.searchField}
            onSubmit={this.handleSearch}
            handleChange={this.changeSearch}
          />
        </div>

        <Input
          handleChange={this.changeInput}
          userInput={this.state.userInput}
          onSubmit={this.handleSubmit}
          value='Add'
        />
        <Tab activeStage={this.activeStage} />

        <TaskList
          searchField={this.state.searchField}
          activeState={this.state.active}
          todos={this.state.todos}
          handleSubmit={this.handleSubmit}
          userInput={this.state.userInput}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          changeInput={this.changeInput}
        />
      </div>
    );
  }
}

export default App;
