import React from "react";
import "./InpuField.css";

class InputList extends React.Component {
  render() {
    return (
      <div className={this.props.value}>
        <form onSubmit={evt => this.props.onSubmit(evt)}>
          <input
            type='text'
            placeholder={this.props.value}
            value={this.props.userInput}
            onChange={event => this.props.handleChange(event)}
          />
          <button>{this.props.value}</button>
        </form>
      </div>
    );
  }
}

export default InputList;
