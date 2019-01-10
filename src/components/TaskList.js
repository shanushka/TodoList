import React from "react";

import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Task
              key={todo.id}
              index={todo.id}
              todo={todo}
              handleComplete={this.props.handleComplete}
              handleDelete ={this.props.handleDelete}
              handleEdit ={this.props.handleEdit}
            />
          );
        })}
      </div>
    );
  }
}

export default TaskList;
