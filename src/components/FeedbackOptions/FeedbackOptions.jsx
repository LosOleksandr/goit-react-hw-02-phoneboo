import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackOption,
  FeedbackItem,
} from './FeedbackOptions.styled.';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackList>
      {options.map(name => (
        <FeedbackItem key={name}>
          <FeedbackOption name={name} onClick={onLeaveFeedback} type="button">
            {name}
          </FeedbackOption>
        </FeedbackItem>
      ))}
    </FeedbackList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
