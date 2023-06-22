import shortid from 'shortid';
import React, { Component } from 'react';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm';
import PhonebookList from 'components/PhonebookList';
import Section from 'components/Section';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    data = {
      id: shortid.generate(),
      ...data,
    };
    const isContactExists = this.state.contacts.some(
      ({ name, number }) => name === data.name || number === data.number
    );

    if (isContactExists) {
      alert('Contact is already exist');
      return;
    }

    this.setState(({ contacts }) => {
      return { contacts: [data, ...contacts] };
    });
  };

  deleteContact = deletedId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== deletedId),
      };
    });
  };

  filterContacts = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  render() {
    const { contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterContacts} />
          {!filteredContacts.length && contacts.length ? (
            <p>There are any matches!</p>
          ) : null}
          {contacts.length ? (
            <PhonebookList
              contacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          ) : (
            <p>You don't have any contacts!</p>
          )}
        </Section>
      </div>
    );
  }
}
