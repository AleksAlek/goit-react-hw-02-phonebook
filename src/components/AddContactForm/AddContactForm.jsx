import React, { Component } from "react";
import PropTypes from "prop-types";

import shortid from "shortid";

import "./AddContactForm.styles.css";

class AddContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleContactData(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    for (const { name } of this.props.contacts) {
      if (name === this.state.name) {
        alert(`${name} is already in contacts`);

        return;
      }
    }

    const newContact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.handleAddContact(newContact);

    this.setState({ name: "", number: "" });
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="add-form">
        <label className="form-label">
          Name
          <input
            className="form-input"
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleContactData.bind(this)}
          />
        </label>

        <label className="form-label">
          Number
          <input
            className="form-input"
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleContactData.bind(this)}
          />
        </label>

        <button type="submit" className="form-btn">
          Add contact
        </button>
      </form>
    );
  }
}

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleAddContact: PropTypes.func.isRequired,
};

export default AddContactForm;
