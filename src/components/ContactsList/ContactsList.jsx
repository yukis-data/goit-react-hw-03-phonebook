import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.section}>
      <h2>Contacts</h2>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} id={id} className={css.li}>
              <p>
                <span>{name}: </span>
                {number}
              </p>
              <button
                type="button"
                onClick={() => onDeleteContact(id)}
                className={css.btn}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
