import React from "react";

class InputList extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <form onSubmit={evt => this.props.onSubmit(evt)}>
          <input
            type='text'
            value={this.props.userInput}
            onChange={event => this.props.handleChange(event)}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default InputList;
