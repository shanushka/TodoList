import React from 'react';

import Button from './Button';
import Input from './InputField';
import classNames from 'classnames';

class Task extends React.Component {
  constructor(props) {
    super();

    this.state = {
      editedContent: props.todo.value,
      edit: false
    };
  }
  /**
   *
   *
   * @memberof Task
   */
  changeEditedContent = evt => {
    this.setState({
      editedContent: evt.target.value
    });
  };

  /**
   *
   *
   * @memberof Task
   */
  handelEditButtonClick = () => {
    const newEdit = !this.state.edit;

    this.setState({
      edit: newEdit
    });
  };

  render() {
    const spanClass = classNames('tasks', {
      completed: this.props.todo.done
    });

    var buttonClass = classNames({
      undo: this.props.todo.done,
      complete: !this.props.todo.done
    });

    if (!this.state.edit) {
      return (
        <div className='task clearfix'>
          <span className={spanClass}>{this.props.todo.value}</span>
          <div class='buttons'>
            <button
              className={buttonClass}
              onClick={() => this.props.handleComplete(this.props.id)}
            />
            <Button
              value='delete'
              onClick={this.props.handleDelete}
              id={this.props.id}
            />
            <Button value='edit' onClick={this.handelEditButtonClick} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='task clearfix'>
          <Input
            userInput={this.state.editedContent}
            label='Save'
            edit={this.state.edit}
            id={this.props.id}
            onSubmit={event => {
              this.props.handleEdit(
                event,
                this.props.id,
                this.handelEditButtonClick,
                this.state.editedContent
              );
            }}
            handleChange={this.changeEditedContent}
          />
        </div>
      );
    }
  }
}

export default Task;
