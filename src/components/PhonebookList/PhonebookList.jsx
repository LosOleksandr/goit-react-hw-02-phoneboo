import React from 'react';
import PropTypes from 'prop-types';

export default function PhonebookList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => deleteContact(id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
