import React, {useContext} from 'react';
import { useFormik } from 'formik';
import {Link, useNavigate } from 'react-router-dom';
import UserContext from '../utils/UserContext'


const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  // if (!values.lastName) {
  //   errors.lastName = 'Required';
  // } else if (values.lastName.length > 20) {
  //   errors.lastName = 'Must be 20 characters or less';
  // }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  const navigate = useNavigate();
  const {user, setuser} = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      navigate("/home");
      setuser({
        name : values.firstName,
        email : values.email,
      })
    },
  });
  return (
    <div className='bg-gray-300 w-1/2 m-auto p-3 '>
      <h1 className='text-center text-2xl font-bold bg-black text-white p-2'>Sign Up</h1>
      <form onSubmit={formik.handleSubmit} className='m-4 '>
        <label htmlFor="firstName" className=''>User Name </label>
        <input
          className='bg-gray-200 rounded m-1 p-1 ml-6'
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <span className='text-red-500'>*{formik.errors.firstName}</span>
        ) : null}
        <br/>
        <label htmlFor="email">Email Address  </label>
        <input
          className='bg-gray-200 rounded m-1 p-1 '
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className='text-red-500'>*{formik.errors.email}</span>
        ) : null}
        <br/>
        <button type="submit" className='bg-black text-white p-1 rounded m-2'>Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;