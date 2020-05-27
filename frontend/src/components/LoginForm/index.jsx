import React from "react";
import Login from "./login"; 

export default function App() {
  const [showForm, setShowForm] = React.useState(false);
  const [registerSelected] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [emailAddress, setUserEmail] = React.useState("");
  const [userGender, setUserGender] = React.useState("");
  const [mobileNumber, setUserMobile] = React.useState("");

  const clickHandler = event => {
    setShowForm(true);
  };
  const clickHandlerLogin = event => {
    setShowForm(false);
  };

  // Display the results
  const submit = () => {
    console.log("Username: " + userName);
    console.log("Email: " + emailAddress);
    console.log("Gender: " + userGender);
    console.log("Mobile: " + mobileNumber);
  };
  const changeHandler = event => {

    switch (event.target.name) {
      case "Username":
        setUserName(event.target.value);

        break;


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
      {showForm === false && <Login />}
      <p>
        Not a Member yet?{" "}
        <button type="Login" onClick={clickHandler}>
          Register
        </button>
      </p>
      {showForm === true && (
        <div>
          <label className="form-label">Username: </label>
          <div className="form-content">
            <input
              type="text"
              placeholder="Enter Username"
              name="Username"
              onChange={changeHandler}
              //  value={userName}
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
              //  value={passWord}
              required
            />
          </div>
          {/* onChange={e => this.setState({ password: e.target.value })}
        /> */}
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

          <label className="form-label">Email: </label>
          <div className="form-content">
            <input
              type="email"
              placeholder="Email Address"
              name="Email"
              onChange={changeHandler}
              required
            />
          </div>

          <br />

          <label className="form-label">Gender: </label>
          <div className="form-content">
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <br />

          {/* Add country code etc using options and select tag */}

          <label className="form-label">Mobile: </label>
          <div className="form-content">
            <input
              type="number"
              placeholder="Mobile number"
              name="Mobile"
              required
            />
          </div>

          <br />

          <center>
            <button onClick={clickHandler}>Register</button>
            {registerSelected && <div />}

            <p>
              Not a Member yet?{" "}
              <button type="Login" onClick={clickHandlerLogin}>
                Login
              </button>
            </p>
          </center>
        </div>
      )}
    </div>
  );
}