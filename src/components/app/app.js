import React, { Component } from 'react';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItem from '../item-add-form';

import './app.css';

export default class App extends Component {
  maxId = 100;

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

  addItem = text => {
    this.setState(({ todos }) => {
      const newItem = {
        label: text,
        id: this.maxId++,
      };

      return {
        todos: [...todos, newItem],
      };
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <main className="todo-app">
        <AppHeader toDo={1} done={3} />
        <section className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </section>
        <TodoList todos={todos} onDeleted={this.deleteItem} />
        <AddItem onItemAdded={this.addItem} />
      </main>
    );
  }
}
