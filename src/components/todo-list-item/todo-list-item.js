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

    this.setClassName = (
      { done, important },
      className = ['todo-list-item']
    ) => {
      if (done) {
        className.push('done');
      }
      if (important) {
        className.push('important');
      }
      return className.join(' ');
    };
  }

  render() {
    const { label, onDeleted } = this.props;

    return (
      <span className={this.setClassName(this.state)}>
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
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
