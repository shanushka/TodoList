import React from 'react';

const Button = props => {
  return (
    <button
      className={props.value}
      onClick={() => props.onClick(props.index)}
    />
  );
};

export default Button;
