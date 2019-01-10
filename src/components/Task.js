import React from "react";
import Button from "./Button";
import "./Task.css";
class Task extends React.Component {
  render() {
    return (
      <div>
        <span className={this.props.todo.done ? "task complete" : "task"}>
          {this.props.todo.value}
        </span>
        <button onClick={() => this.props.handleComplete(this.props.index)}>
          {this.props.todo.done ? "Undo" : "Complete"}
        </button>
        <Button
          value='delete'
          onClick={this.props.handleDelete}
          index={this.props.index}
        />
        <Button
          value='edit'
          onClick={this.props.handleEdit}
          index={this.props.index}
        />
      </div>
    );
  }
}

export default Task;
