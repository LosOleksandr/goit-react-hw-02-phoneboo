import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import shortid from 'shortid';
import * as yup from 'yup';
import PropTypes from 'prop-types';

export default class PhonebookForm extends Component {
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  userSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Only letters are allowed'
      )

      .required('Name is required'),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Incorrect format number'
      )

      .required('Number is required'),
  });

  onSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={this.userSchema}
        validateOnChange={true}
        onSubmit={this.onSubmit}
      >
        <Form autoComplete="off" action="">
          <label htmlFor={this.nameInputId}>Name</label>
          <Field id={this.nameInputId} name="name" />
          <ErrorMessage name="name" component="div" />
          <label htmlFor={this.numberInputId}>Number</label>
          <Field id={this.numberInputId} name="number"></Field>
          <ErrorMessage name="number" component="div" />
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    );
  }
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
