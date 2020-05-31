import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core'
import { Formik } from "formik";
import * as Yup from "yup";

import "./loginForm.css"

function ValidatedLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Formik
      initialValues={{ email, password }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
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

export default ValidatedLoginForm;