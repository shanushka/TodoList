import React from "react";
import "./InpuField.css";

class InputList extends React.Component {
  render() {
    return (
      <div className='inputfield'>
        <form onSubmit={evt => this.props.onSubmit(evt)}>
          <input
            type='text'
            defaultValue={this.props.userInput}
            onChange={event => this.props.handleChange(event)}
          />
          <button>{this.props.value}</button>
        </form>
      </div>
    );
  }
}

export default InputList;
