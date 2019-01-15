import React, { Component } from 'react';

import './assets/css/layout.css';
import Tab from './components/TabBar';
import Input from './components/InputField';
import TaskList from './components/TaskList';

/** main component */
class App extends Component {

  /** main component */
  /**
   */
  constructor() {
    super();

    const storageData = window.localStorage.getItem('todoData');
    const todos = storageData ? JSON.parse(storageData) : [];

    this.state = {
      searchField: '',
      active: 'Home',
      userInput: '',
      todos: todos
    };
  }
  /*
   @param  {} event
   */
  changeInput = event => {
    this.setState({
      userInput: event.target.value
    });
  };
  /*
    @param  {event} evt
   */
  handleSubmit = evt => {
    const newTodo = {
      id: Date.now(),
      value: this.state.userInput,
      done: false
    };
    const todos = [...this.state.todos, newTodo];

    evt.preventDefault();
    this.setState({
      todos,
      userInput: ''
    });
  };
  /*
    @param  {event} evt
    @param  {string} index
    @param  {function} handleClick
    @param  {string} editedContent
   */
  handleEdit = (evt, index, handleClick, editedContent) => {
    evt.preventDefault();

    const todos = [...this.state.todos];
    const indexx = todos.findIndex(todo => todo.id === index);

    todos[indexx].value = editedContent;
    todos[indexx].done = this.state.todos[indexx].done;

    this.setState({ todos });
    handleClick();
  };
  /*
    @param  {string} index
   */
  handleDelete = index => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== index;
    });

    this.setState({ todos });
  };
  /*
    @param  {string} index
   */
  handleComplete = index => {
    const todos = this.state.todos;
    const indexx = todos.findIndex(todo => todo.id === index);

    todos[indexx].done = !todos[indexx].done;

    this.setState({ todos });
  };
  /*
   * @param  {string} active
   */
  setActiveState = active => {
    this.setState({
      active
    });
  };
  /*
    @param  {event} evt
   */
  changeSearch = evt => {
    this.setState({
      searchField: evt.target.value
    });
  };
  /*
    @param  {event} evt
   */
  handleSearch = evt => {
    evt.preventDefault();
    this.setState({
      searchField: ''
    });
  };


  /**
   *
   *
   * @returns {Dom}
   * @memberof App
   */
  render() {
    window.localStorage.clear();
    window.localStorage.setItem('todoData', JSON.stringify(this.state.todos));

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
