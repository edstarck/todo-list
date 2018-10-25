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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++,
    };
  }

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
      const newItem = this.createTodoItem(text);

      return {
        todos: [...todos, newItem],
      };
    });
  };

  toggleImportantItem = id => {
    this.setState(({ todos }) => {
      const todo = todos.filter(todo => todo.id === id);
      todo.map(obj => (obj.important = !obj.important));
      const newTodos = [...this.state.todos];

      return { todos: newTodos };
    });
  };

  toggleDoneItem = id => {
    this.setState(({ todos }) => {
      const todo = todos.filter(todo => todo.id === id);
      todo.map(obj => (obj.done = !obj.done));
      const newTodos = [...this.state.todos];

      return { todos: newTodos };
    });
  };

  render() {
    const { todos } = this.state;
    const totalDone = todos.filter(el => el.done).length;
    const totalToDo = todos.length - totalDone;

    return (
      <main className="todo-app">
        <AppHeader toDo={totalToDo} done={totalDone} />
        <section className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </section>
        <TodoList
          todos={todos}
          onDeleted={this.deleteItem}
          onToggleImportant={this.toggleImportantItem}
          onToggleDone={this.toggleDoneItem}
        />
        <AddItem onItemAdded={this.addItem} />
      </main>
    );
  }
}
