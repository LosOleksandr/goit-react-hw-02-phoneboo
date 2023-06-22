import { Field, Form, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 380px;
`;

export const StyledLabel = styled.label`
  display: block;
  &:last-of-type {
    margin-top: 25px;
  }
`;

export const StyledField = styled(Field)`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px #000 solid;
  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px #000 solid;
  }
`;

export const SumbitBtn = styled.button`
  display: block;
  font-family: inherit;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0 auto;
  margin-top: 25px;
  background-color: #92cbdf;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: #1a6985;
    color: #fff;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  display: block;
  font-size: 14px;
  margin-bottom: 25px;
  color: tomato;
`;
