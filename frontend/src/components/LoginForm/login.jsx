import React from "react";

export default function Login() {
  const [loginSelected, setLoginForm] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [passWord, setPassword] = React.useState("");

  const login = () => {
    console.log("username: " + userName);
    console.log("Password: " + passWord);
  };

  const changeHandler = event => {
    if (event.target.name === "Username") {
      setUserName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const clickHandler = event => {
    setLoginForm(true);
  };

  return (
    <div>
      <label className="form-label">Username: </label>
      <div className="form-content">
        <input
          type="text"
          placeholder="Enter Username"
          name="Username"
          onChange={changeHandler}
          required
        />
      </div>

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
      <center>
        <br />
        <button onClick={login}>Login</button>
        {loginSelected && <div />}
      </center>
    </div>
  );
}