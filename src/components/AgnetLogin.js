import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/login.scss";

import { login, updateAuth } from "../ducks/agentAuthReducer";

class AgentLogin extends Component {
  handleChange = e => {
    this.props.updateAuth(e.target.name, e.target.value);
  };
  handleLogin = e => {
    this.props.login(this.props.email, this.props.password);
  };
  render() {
    if (this.props.error === "login") {
      alert("incorrect username or password");
    }
    console.log(this.props);
    return (
      <section>
        {this.props.id ? <Redirect to="/main/agent" /> : null}
        <h1>Login</h1>
        <input onChange={this.handleChange} name="email" placeholder="Email" />
        <input
          onChange={this.handleChange}
          name="password"
          placeholder="Password"
        />
        <button onClick={this.handleLogin}>Login</button>
        <p>or</p>
        <Link to="/register/agent">
          <button className="register-wrapper">Register</button>
        </Link>
      </section>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    email: reduxState.agentAuth.email,
    password: reduxState.agentAuth.password,
    id: reduxState.agentAuth.id,
    error: reduxState.agentAuth.error
  };
};

export default connect(
  mapStatetoProps,
  { updateAuth, login }
)(AgentLogin);
