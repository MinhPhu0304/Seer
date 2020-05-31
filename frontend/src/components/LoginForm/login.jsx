import React from "react";
import "./styles.css"

export class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    //binding event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //event handler to handle the entered values
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log("Submitting");
    console.log(this.state);
  }

  render() {
    // const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      // <h1>Email entered:{this.state.email}</h1>
    );
  }
}
export default login;