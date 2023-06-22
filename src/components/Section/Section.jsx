import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionContainer>
      <Title>{title && title}</Title>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
