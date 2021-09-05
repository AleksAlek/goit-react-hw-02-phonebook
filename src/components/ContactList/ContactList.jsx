import React from "react";
import PropTypes from "prop-types";

import "./ContactList.styles.css";

const ContactList = ({ contacts, filterText, handleDelete }) => {
  const normalizedName = contacts.map((contact) => ({
    ...contact,
    name: contact.name.toLowerCase(),
  }));

  const filteredContacts = normalizedName.filter(({ name }) =>
    name.includes(filterText)
  );

  return (
    <ul className="contacts-list">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className="contacts-item">
          <p className="contacts-name">
            {name}: {number}
          </p>

          <button
            className="contacts-btn"
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
