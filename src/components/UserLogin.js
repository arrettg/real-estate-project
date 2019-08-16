import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateAuth, login } from "../ducks/userAuthReducer";
import "../styles/login.scss";

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
      <section>
        {this.props.id ? <Redirect to="/main/user" /> : null}
        <h1>Login</h1>
        <div className="input-wrapper">
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
        </div>
        <button onClick={this.handleLogin}>Sign in</button>
        <p>or</p>

        <Link to="/register/user">
          <button className={"register-wrapper"}>Register New User</button>
        </Link>
      </section>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    username: reduxState.userAuth.username,
    password: reduxState.userAuth.password,
    id: reduxState.userAuth.id,
    error: reduxState.userAuth.error
  };
};

export default connect(
  mapStatetoProps,
  { updateAuth, login }
)(UserLogin);
