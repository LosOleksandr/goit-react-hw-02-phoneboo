import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`;

export const FeedbackItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const FeedbackOption = styled.button`
  width: 100%;
  padding: 15px;
  text-transform: uppercase;
  border: 2px transparent solid;
  color: #0f1a4c;
  font-weight: 400;
  border-radius: 25px;
  background-color: ${({ name }) => {
    switch (name) {
      case 'good':
        return '#bbe5a8';
      case 'neutral':
        return '#dfdb92';
      case 'bad':
        return '#d27266';
      default:
        return 'transparent';
    }
  }};
  outline: none;
  transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 11px 70px 15px rgba(0, 0, 0, 0.12);

    border: 2px #0f1a4c solid;
    background-color: ${({ name }) => {
      switch (name) {
        case 'good':
          return '#25be45';
        case 'neutral':
          return '#f1e733';
        case 'bad':
          return '#e24632';
        default:
          return 'transparent';
      }
    }};
  }
`;
