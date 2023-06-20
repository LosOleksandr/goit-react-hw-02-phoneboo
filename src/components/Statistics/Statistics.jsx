import React from 'react';
import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsText } from './Statistics.styled';

export default function Statistics({ options, total, percentage }) {
  return (
    <StatsList>
      {options.map(([key, value]) => (
        <StatsItem key={key}>
          <StatsText>{key}:</StatsText>
          <span>{value}</span>
        </StatsItem>
      ))}
      <StatsItem>
        <StatsText>Total: </StatsText>
        <span>{total}</span>
      </StatsItem>
      <StatsItem>
        <StatsText>Positive feedback:</StatsText>
        <span>{total === 0 ? 0 : percentage}%</span>
      </StatsItem>
    </StatsList>
  );
}

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
