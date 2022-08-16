import React, { Component } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList'
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.addToContacts(data);
  };

  addToContacts = data => {
    const isNameExist = this.state.contacts.find(
      contact => contact.name === data.name
    );
    if (isNameExist) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
  };

  сhangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = id => {
    const remainingContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: remainingContacts,
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('Contacts',);
    const parcedContacts = JSON.parse(contacts);
    if (parcedContacts) {
      this.setState({ contacts: parcedContacts });
    }
  }

  componentDidUpdate( prevProps, prevState ) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        'Contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <Form onFormSubmit={this.formSubmitHandler}></Form>

        <Filter value={this.state.value} onChange={this.сhangeFilter} />
        <ContactsList
          contacts={visibleContacts || this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
