import React, { Component } from "react";

import AddContactForm from "./components/AddContactForm/AddContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleAddContact(newContact) {
    const { contacts } = this.state;

    this.setState({ contacts: [...contacts, newContact] });
  }

  handleFilter({ value }) {
    this.setState({ filter: value });
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
