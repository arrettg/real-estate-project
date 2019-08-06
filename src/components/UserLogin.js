import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateAuth, login } from "../ducks/userAuthReducer";

class UserLogin extends Component {
  handleChange = e => {
    this.props.updateAuth(e.target.name, e.target.value);
  };
  handleLogin = e => {
    this.props.login(this.props.username, this.props.password);
  };
  render() {
    if (this.props.error === "login") {
      alert("incorrect username or password");
    }
    return (
      <div>
        {this.props.id ? <Redirect to="/main/user" /> : null}
        <h1>Login</h1>
        <input
          onChange={this.handleChange}
          name="username"
          placeholder="Username"
        />
        <input
          onChange={this.handleChange}
          name="password"
          placeholder="Password"
        />
        <button onClick={this.handleLogin}>Submit</button>
        <p1>or</p1>
        <Link to="/register/user">
          <h1>Register</h1>
        </Link>
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    username: reduxState.userAuth.username,
    password: reduxState.userAuth.password
  };
};

export default connect(
  mapStatetoProps,
  { updateAuth, login }
)(UserLogin);
