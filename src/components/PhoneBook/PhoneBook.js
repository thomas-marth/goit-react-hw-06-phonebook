import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import * as Storage from "../../services/localStorage";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactListContainer";
import Filter from "../Filter/FilterContainer";
import "normalize.css";

function PhoneBook({ contacts, onAddContact, fetchContacts }) {
  useEffect(() => {
    const contactsLS = Storage.getContactsFromLS();
    if (contactsLS) {
      fetchContacts(contactsLS);
    }
  }, [fetchContacts]);

  useEffect(() => {
    Storage.saveContactsToLS(contacts);
  }, [contacts]);

  const handleFormSubmit = (formData) => {
    const contactToAdd = {
      id: uuidv4(),
      name: formData.name,
      number: formData.number,
    };

    if (contacts.find((contact) => contact.name === contactToAdd.name)) {
      alert(`${contactToAdd.name} is already in contacts!`);
      return;
    }

    if (contacts.find((contact) => contact.number === contactToAdd.number)) {
      alert(`${contactToAdd.number} is already in contacts!`);
      return;
    }

    onAddContact(contactToAdd);
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={handleFormSubmit} />
      {contacts.length > 1 && <Filter />}
      <ContactList />
    </div>
  );
}

PhoneBook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onAddContact: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

export default PhoneBook;
