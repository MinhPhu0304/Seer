import React, { useState } from "react";
import { Button, TextField, CircularProgress } from '@material-ui/core'
import { Formik } from "formik";
import * as Yup from "yup";

import { dispatcher } from '../../store'
import { setLogedIn } from '../../actions/meAction'
import "./loginForm.css"

const initialFormValues = {
  email: '',
  password: '',
}

export default function ValidatedLoginForm() {
  const [isLoading, setIsWaiting] = useState(false)
  const [errorText, setErrorText] = useState(null)
  const handleFormikSubmit = async (values) => {
    setIsWaiting(true)
    const logedIn = await logInWithCredential(values.email, values.password)
    if (!logedIn) {
      setErrorText('Incorrect Email/ Password');
    } else {
      setErrorText(null)
    }
    setIsWaiting(false)
  }

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleFormikSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 characters minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form className="login__container" onSubmit={handleSubmit}>
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              error={errors.email && touched.email}
              helperText={errors.email || errorText}
              onBlur={handleBlur}
            />
            <TextField
              name="password"
              type="password"
              variant="outlined"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              error={errors.password && touched.password}
              helperText={errors.password || errorText}
              label="Password"
              onBlur={handleBlur}
            />
            <Button disabled={isLoading} color="primary" variant="contained" type="submit" disabled={isSubmitting}>
              Login
            </Button>
            { isLoading && <CircularProgress />}
          </form>
        );
      }}
    </Formik>)
}

async function logInWithCredential(email, password) {
  const response = await fetch('/api/user', constructFetchConfig(email, password));
  console.log(response)
  if (!response.ok) return false;
  const body = await response.json();
  dispatcher(setLogedIn(body));
  return true;
}

function constructFetchConfig(email, password) {
  return {
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }
}
