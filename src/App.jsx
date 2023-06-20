import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { Container, Message } from 'App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    this.setState(prevState => {
      const btnName = evt.target.name;
      return {
        [btnName]: prevState[btnName] + 1,
      };
    });
  };

  getTotalFeedbacks = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  getPercentage = () => {
    return Number(
      ((this.state.good / this.getTotalFeedbacks()) * 100).toFixed()
    );
  };

  render() {
    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.getTotalFeedbacks() ? (
            <Statistics
              options={Object.entries(this.state)}
              total={this.getTotalFeedbacks()}
              percentage={this.getPercentage()}
            />
          ) : (
            <Message>No feedback given!</Message>
          )}
        </Section>
      </Container>
    );
  }
}
