import React, { Component } from "react";

import AddContactForm from "./components/AddContactForm/AddContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleAddContact(newContact) {
    const { contacts } = this.state;

    this.setState({ contacts: [...contacts, newContact] });
  }

  handleFilter({ value }) {
    const modifiedValue = value.toLowerCase();

    this.setState({ filter: modifiedValue });
  }

  handleDelete(id) {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );

    this.setState({ contacts: filteredContacts });
  }

  render() {
    const { contacts, filter } = this.state;

    // Добавлял к функциям .bind(this), иначе падал рендер
    return (
      <div className="main-container">
        <h1>Phonebook</h1>
        <AddContactForm
          handleAddContact={this.handleAddContact.bind(this)}
          contacts={contacts}
        />

        <h2>Contacts</h2>
        <Filter
          filterText={filter}
          handleFilter={this.handleFilter.bind(this)}
        />
        <ContactList
          contacts={contacts}
          filterText={filter}
          handleDelete={this.handleDelete.bind(this)}
        />
      </div>
    );
  }
}

export default App;
