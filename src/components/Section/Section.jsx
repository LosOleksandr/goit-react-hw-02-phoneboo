import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      <h2>{title && title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
