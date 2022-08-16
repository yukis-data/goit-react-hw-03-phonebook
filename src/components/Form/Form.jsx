import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import css from './Form.module.css'

export class Form extends Component {
  state = {
    id: nanoid(),
    name: '',
    number: '',
    };
    
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleValueChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      id: nanoid(),
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.section}>
        <h1>Phonebook</h1>

        <form onSubmit={this.handleSubmit} className={css.form}>
          <label className={css.label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleValueChange}
              value={this.state.name}
              id={this.nameInputId}
              className={css.input}
            />
          </label>

          <label className={css.label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleValueChange}
              id={this.numberInputId}
              className={css.input}
            />
          </label>

          <button type="submit" className={css.button}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
