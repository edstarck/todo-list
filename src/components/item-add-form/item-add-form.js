import React from 'react';
import './item-add-form.css';

const AddItem = ({ onItemAdded }) => {
  return (
    <section className="bottom-panel d-flex">
      <button
        className="btn btn-outline-secondary"
        onClick={() => onItemAdded('Hello world')}
      >
        add item
      </button>
    </section>
  );
};

export default AddItem;
