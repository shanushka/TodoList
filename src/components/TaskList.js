import React from "react";

import Task from "./Task";
import { isTag } from "postcss-selector-parser";

const TaskList = props => {
  console.log("ii", props.activeState);

  let list = null;
  if (props.activeState == "Completed") {
    list = props.todos.filter(todo => todo.done);
  } else if (props.activeState == "Incomplete") {
    list = props.todos.filter(todo => !todo.done);
  } else {
    list = [...props.todos];
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
