import React, { Component } from 'react';
import './item-add-form.css';

export default class AddItem extends Component {
  state = {
    label: '',
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);

    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form
        className="bottom-panel todo-app-form d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className="form-control"
          placeholder="What need to be done"
          onChange={this.onLabelChange}
          value={label}
        />
        <button className="btn btn-outline-secondary">add item</button>
      </form>
    );
  }
}
