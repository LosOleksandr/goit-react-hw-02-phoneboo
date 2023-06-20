import styled from '@emotion/styled';

export const StatsList = styled.ul`
  max-width: 480px;
  margin: 0 auto;
  padding: 25px 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 24px;
  text-transform: uppercase;
  &:not(:last-of-type){
    margin-bottom: 15px;
  }
`;

export const StatsText = styled.p`
  border-bottom: 2px #0f1a4c solid;
`;
