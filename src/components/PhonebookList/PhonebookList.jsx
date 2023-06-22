import React from 'react';
import PropTypes from 'prop-types';
import {
  ListContainer,
  ListItem,
  ListText,
  ListBtn,
} from './PhonebookList.styled';

export default function PhonebookList({ contacts, deleteContact }) {
  return (
    <ListContainer>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListText>
            {name}: {number}
          </ListText>
          <ListBtn onClick={() => deleteContact(id)} type="button">
            Delete
          </ListBtn>
        </ListItem>
      ))}
    </ListContainer>
  );
}

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
