import React from 'react';

/**
 *
 *
 * @param {objects} props
 * @returns {Dom of Input field}
 */

const InputList = props => {
  return (
    <div className={props.label.toLowerCase()}>
      <form onSubmit={evt => props.onSubmit(evt)}>
        <input
          type='text'
          placeholder={props.label}
          value={props.userInput}
          onChange={event => props.handleChange(event)}
        />
        <button>{props.label}</button>
      </form>
    </div>
  );
};

export default InputList;
