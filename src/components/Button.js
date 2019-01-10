import React from "react";

const Button = props => {
  return (
    <button onClick={() => props.onClick(props.index)}>{props.value}</button>
  );
};

export default Button;
