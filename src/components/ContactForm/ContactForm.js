import React, { useState } from "react";
import PropTypes from "prop-types";

const ContactForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function reset() {
    setName("");
    setNumber("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !number) {
      return;
    }

    onFormSubmit({ name, number });
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <h2> Name</h2>
        <input
          type="text"
          value={name}
          name="name"
          required
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <label htmlFor="number">
        <h2> Number</h2>
        <input
          name="number"
          required
          value={number}
          onChange={({ target }) => setNumber(target.value)}
        />
      </label>
      <p></p>
      <button type="submit">Add new contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
