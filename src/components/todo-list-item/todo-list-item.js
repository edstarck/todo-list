import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;

    const setClassName = (action, status) => {
      let className = ['todo-list-item'];

      if (action) {
        className.push('done');
      }
      if (status) {
        className.push('important');
      }

      return className.join(' ');
    };

    return (
      <span className={setClassName(done, important)}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
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
