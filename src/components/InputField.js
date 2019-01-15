import React from 'react';

const InputList = props => {
  return (
    <div className={props.value}>
      <form onSubmit={evt => props.onSubmit(evt)}>
        <input
          type='text'
          placeholder={props.value}
          value={props.userInput}
          onChange={event => props.handleChange(event)}
        />
        <button>{props.value}</button>
      </form>
    </div>
  );
};

export default InputList;
