import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core'

import Login from './ValidatedLoginForm'

export default function LoginForm() {
  const [signUp, setShowSignUp] = useState(false);
  const [emailAddress, setUserEmail] = useState("");
  const [password, setPassword] = useState('');
  const [userGender, setUserGender] = useState("");
  const [mobileNumber, setUserMobile] = useState("");

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
      case "Password":
        setPassword(event.target.value)
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
          <form>
            <div className="form-content">
              <TextField
                type="email"
                label="Email"
                name="Email"
                variant="outlined"
                value={emailAddress}
                onChange={changeHandler}
                required
              />
            </div>
            <br />
            <div className="form-content">
              <TextField
                variant="outlined"
                type="password"
                label="Password"
                name="Password"
                value={password}
                onChange={changeHandler}
                required
              />
            </div>
            <br />
            <div className="form-content">
              <TextField
                variant="outlined"
                label="Re-enter password"
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
              <TextField
                type="tel"
                variant="outlined"
                label="Phone number"
                name="Mobile"
                value={mobileNumber}
                onChange={changeHandler}
                required
              />
            </div>

            <br />
            <center>
              <Button color="primary" type="submit" onClick={clickHandler}>Register</Button>
              <p>
                Want to log in instead ?
              <Button color="primary" onClick={clickHandlerLogin}>
                  Login
              </Button>
              </p>
            </center>
          </form>
        </div>

      )}
    </div>
  );
}
