import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AgentLogin extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>Submit</button>
        <p1>or</p1>
        <Link to="/register/agent">
          <h1>Register</h1>
        </Link>
      </div>
    );
  }
}
