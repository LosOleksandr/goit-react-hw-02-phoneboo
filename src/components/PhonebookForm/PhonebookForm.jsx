import React, { Component } from 'react';
import { Formik } from 'formik';
import shortid from 'shortid';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledField,
  StyledLabel,
  SumbitBtn,
  StyledErrorMessage,
} from './PhonebookForm.styled';

export default class PhonebookForm extends Component {
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  initialValues = {
    name: '',
    number: '',
  };

  userSchema = yup.object({
    name: yup
      .string()
      .required('Name is required')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Only letters are allowed'
      )
      .trim()
      .min(4, 'Name must be at least 4 charactares'),
    number: yup
      .string()
      .trim()
      .required('Number is required')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Incorrect format number'
      ),
  });

  onSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.userSchema}
        validateOnBlur={false}
        onSubmit={this.onSubmit}
      >
        <StyledForm autoComplete="off" action="">
          <StyledLabel htmlFor={this.nameInputId}>Name</StyledLabel>
          <StyledField id={this.nameInputId} name="name" />
          <StyledErrorMessage name="name" component="small" />
          <StyledLabel htmlFor={this.numberInputId}>Number</StyledLabel>
          <StyledField id={this.numberInputId} name="number" />
          <StyledErrorMessage name="number" component="small" />
          <SumbitBtn type="submit">Add Contact</SumbitBtn>
        </StyledForm>
      </Formik>
    );
  }
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
