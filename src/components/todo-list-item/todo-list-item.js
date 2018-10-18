import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false,
    };

    this.onLabelClick = () => {
      this.setState(({ done }) => ({
        done: !done,
      }));
    };

    this.onMarkImportant = () => {
      this.setState(({ important }) => ({
        important: !important,
      }));
    };
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    const className = ['todo-list-item'];

    function setClassName(done, important) {
      if (done) {
        className.push('done');
      }

      if (important) {
        className.push('important');
      }

      return className.join(' ');
    }

    return (
      <span className={setClassName(done, important)}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
