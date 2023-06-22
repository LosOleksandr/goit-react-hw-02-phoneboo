import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  const searchId = shortid.generate();
  return (
    <label htmlFor={searchId}>
      Search
      <input
        id={searchId}
        name="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
