import React from "react";
import Button from "./Button";
import Input from "./InputField";
import "./Task.css";

class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: false
    };
  }

  render() {
    if (!this.state.edit) {
      return (
        <div className='task clearfix'>
          <span className={this.props.todo.done ? "tasks complete" : "tasks"}>
            {this.props.todo.value}
          </span>
          <div class='buttons'>
            <button
              className={this.props.todo.done ? "Undo" : "Complete"}
              onClick={() => this.props.handleComplete(this.props.index)}
            />
            <Button
              value='delete'
              onClick={this.props.handleDelete}
              index={this.props.index}
            />
            <Button value='edit' onClick={this.handelEditButtonClick} />
          </div>
        </div>
      );
    } else {
      return (
        <Input
          userInput={this.props.todo.value}
          value='Save'
          edit={this.state.edit}
          index={this.props.index}
          onSubmit={event => {
            this.props.handleEdit(
              event,
              this.props.index,
              this.handelEditButtonClick
            );
          }}
          handleChange={this.props.changeInput}
        />
      );
    }
  }

  handelEditButtonClick = () => {
    let newEdit = !this.state.edit;
    this.setState({
      edit: newEdit
    });
  };
}

export default Task;
