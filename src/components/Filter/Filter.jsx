import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export default function Filter({ value, onChange }) {
  const searchId = shortid.generate();
  return (
    <FilterContainer>
      <FilterLabel htmlFor={searchId}>Search</FilterLabel>
      <FilterInput
        id={searchId}
        name="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
