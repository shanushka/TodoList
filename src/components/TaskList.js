import React from 'react';

import Task from './Task';

/**
 *
 *
 * @param {*} props
 * @returns
 */
const TaskList = props => {

  const filteredContent = props.todos.filter(todo => {
    return todo.value.indexOf(props.searchField) !== -1;
  });

  let list = null;

  if (props.activeState === 'Completed') {
    list = filteredContent.filter(todo => todo.done);
  } else if (props.activeState === 'Incomplete') {
    list = filteredContent.filter(todo => !todo.done);
  } else {
    list = [...filteredContent];
  }

  if (list.length !== 0) {
    return (
      <ul>
    
        {list.map(todo => {
          return (
            <Task
              key={todo.id}
              id={todo.id}
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
        
      </ul>
    );
  } 
    
  return <div className="notodo">No Todo Lists To Show</div>;
  
};

export default TaskList;
