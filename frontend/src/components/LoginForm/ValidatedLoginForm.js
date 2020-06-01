import React from "react";
import { Button, TextField } from '@material-ui/core'
import { Formik } from "formik";
import * as Yup from "yup";

import "./loginForm.css"

const initialFormValues = {
  email: '',
  password: '',
}

export default function ValidatedLoginForm() {
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { setSubmitting }) => {
        logInWithCredential(values.email, values.password)
      }}
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
              helperText={errors.email}
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
              helperText={errors.password}
              label="Password"
              onBlur={handleBlur}
            />
            <Button color="primary" variant="contained" type="submit" disabled={isSubmitting}>
              Login
          </Button>
          </form>
        );
      }}
    </Formik>)
}

async function logInWithCredential(email, password) {
  const response = await fetch('/api/user', constructFetchConfig(email, password));
  const body = await response.json();
  console.log(body);
}

function constructFetchConfig(email, password) {
  return {
    body: JSON.stringify({ email, password}),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }
}
