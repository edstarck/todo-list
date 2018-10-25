import React, { Component } from 'react';
import './item-add-form.css';

export default class AddItem extends Component {
  changeValue = e => {
    console.log(e.target.value);
  };

  submitForm = e => {
    e.preventDefault();
    this.props.onItemAdded('Hello world');
  };

  render() {
    return (
      <form
        className="bottom-panel todo-app-form d-flex"
        onSubmit={this.submitForm}
      >
        <input
          type="text"
          className="form-control"
          placeholder="What need to be done"
          onChange={this.changeValue}
        />
        <button className="btn btn-outline-secondary">add item</button>
      </form>
    );
  }
}
