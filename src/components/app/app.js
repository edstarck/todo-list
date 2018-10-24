import React, { Component } from 'react';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';

export default class App extends Component {
  state = {
    todos: [
      { label: 'Drink Coffee', id: 1 },
      { label: 'Make Awesome App', id: 2 },
      { label: 'Have a lunch', id: 3 },
    ],
  };

  deleteItem = id => {
    this.setState(({ todos }) => {
      const newTodos = todos.filter(todo => {
        return todo.id !== id;
      });

      return {
        todos: newTodos,
      };
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todos} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
