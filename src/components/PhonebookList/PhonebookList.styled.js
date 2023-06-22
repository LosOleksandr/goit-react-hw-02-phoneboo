import styled from '@emotion/styled';

export const ListContainer = styled.ul`
  width: 100%;
  max-width: 380px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: #92cbdf;
    border-radius: 50%;
  }
`;

export const ListText = styled.p`
  text-transform: capitalize;
`;

export const ListBtn = styled.button`
  background-color: #92cbdf;
  border: none;
  border-radius: 25px;
  margin-left: 15px;
  padding: 8px 15px;
  font-family: inherit;
  text-transform: capitalize;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: #1a6985;
    color: #fff;
  }
`;
