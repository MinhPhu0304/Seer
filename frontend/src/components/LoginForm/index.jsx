import React from "react";
import { Button } from '@material-ui/core'

import Login from './ValidatedLoginForm'

export default function LoginForm() {
  const [signUp, setShowSignUp] = React.useState(false);
  const [emailAddress, setUserEmail] = React.useState("");
  const [userGender, setUserGender] = React.useState("");
  const [mobileNumber, setUserMobile] = React.useState("");

  const clickHandler = event => {
    setShowSignUp(true);
  };
  const clickHandlerLogin = event => {
    setShowSignUp(false);
  };

  const changeHandler = event => {

    switch (event.target.name) {
      case "Email":
        setUserEmail(event.target.value);
        break;
      case "Gender":
        setUserGender(event.target.value);
        break;
      case "Mobile":
        setUserMobile(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {signUp === false && <Login />}
      {signUp === false && <p>
        Not a Member yet?
        <Button color="primary" onClick={clickHandler}>
          Register
        </Button>
      </p>}
      {signUp === true && (
        <div>
          <label className="form-label">Email: </label>
          <div className="form-content">
            <input
              type="email"
              placeholder="Email Address"
              name="Email"
              value={emailAddress}
              onChange={changeHandler}
              required
            />
          </div>
          <br />
          <label className="form-label">Password: </label>
          <div className="form-content">
            <input
              type="password"
              placeholder="Enter Password"
              name="Password"
              onChange={changeHandler}
              required
            />
          </div>
          <br />

          <label className="form-label">Password: </label>
          <div className="form-content">
            <input
              type="password"
              placeholder="Re-enter Password"
              name="Password1"
              onChange={changeHandler}
              required
            />
          </div>

          <br />


          <label className="form-label">Gender: </label>
          <div className="form-content">
            <select name="Gender" value={userGender} onChange={changeHandler}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <br />
          <label className="form-label">Mobile: </label>
          <div className="form-content">
            <input
              type="tel"
              placeholder="Mobile number"
              name="Mobile"
              value={mobileNumber}
              onChange={changeHandler}
              required
            />
          </div>

          <br />
          <center>
            <Button color="primary" onClick={clickHandler}>Register</Button>
            <p>
              Want to log in instead ?
              <Button color="primary" onClick={clickHandlerLogin}>
                Login
              </Button>
            </p>
          </center>
        </div>
      )}
    </div>
  );
}
