import React from "react";

import Task from "./Task";

const TaskList = props => {

  let filteredContent = props.todos.filter(todo => {
    return todo.value.indexOf(props.searchField) !== -1;
  });

  let list = null;
  if (props.activeState == "Completed") {
    list = filteredContent.filter(todo => todo.done);
  } else if (props.activeState == "Incomplete") {
    list = filteredContent.filter(todo => !todo.done);
  } else {
    list = [...filteredContent];
  }
  return (
    <div>
      {list.map(todo => {
        return (
          <Task
            key={todo.id}
            index={todo.id}
            todo={todo}
            handleSubmit={props.handleSubmit}
            handleComplete={props.handleComplete}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
            changeInput={props.changeInput}
            userInput={props.userInput}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
