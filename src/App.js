import React, { Component } from 'react';

import './assets/css/reset.css';
import './assets/css/layout.css';
import Tab from './components/TabBar';
import Input from './components/InputField';
import TaskList from './components/TaskList';

/**
 * Main class component.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {

  constructor() {
    super();

    this.state = {
      searchField: '',
      active: 'Home',
      userInput: '',
      todos: []
    };
  }

  componentDidMount() {
    const storageData = window.localStorage.getItem('todoData');
    const todos = storageData ? JSON.parse(storageData) : [];
    this.setState({
      todos: todos
    });
  }

  componentDidUpdate() {
    window.localStorage.clear();
    window.localStorage.setItem('todoData', JSON.stringify(this.state.todos));
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
      userInput: ''
    });
  };

  handleEdit = (evt, id, handleClick, editedContent) => {
    evt.preventDefault();

    const newTodos = this.state.todos.map((currentTodo) => {
      if (currentTodo.id !== id) {
        return currentTodo;
      }

      return{
        ...currentTodo,
        value: editedContent
      };
    });

    this.setState({ todos: newTodos });
    handleClick();
  };

  handleDelete = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({ todos });
  };

  handleComplete = id => {
    const todos = this.state.todos;
    const index = todos.findIndex(todo => todo.id === id);

    todos[index].done = !todos[index].done;

    this.setState({ todos });
  };

  setActiveState = active => {
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
    evt.preventDefault();

    this.setState({
      searchField: ''
    });
  };

  render() {
    return (
      <div className='App clearfix'>
        <div className='header clearfix'>
          <h1>Todolist</h1>
          <Input
            label='search'
            userInput={this.state.searchField}
            onSubmit={this.handleSearch}
            handleChange={this.changeSearch}
          />
        </div>

        <Input
          handleChange={this.changeInput}
          userInput={this.state.userInput}
          onSubmit={this.handleSubmit}
          label='Add'
        />
        <Tab
          setActiveState={this.setActiveState}
          activeState={this.state.active}
        />

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
