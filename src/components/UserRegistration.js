import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateAuth, register } from "../ducks/userAuthReducer";
import "../styles/register.scss";

class UserRegistration extends Component {
  handleChange = e => {
    this.props.updateAuth(e.target.name, e.target.value);
  };
  handdleRegister = e => {
    this.props.register(
      this.props.username,
      this.props.password,
      this.props.email
    );
  };
  render() {
    if (this.props.error === "register") {
      alert("Username is taken");
    }

    return (
      <section>
        {this.props.id ? <Redirect to="/main/user" /> : null}
        <input
          onChange={this.handleChange}
          name="username"
          placeholder="Username"
        />
        <input onChange={this.handleChange} name="email" placeholder="Email" />
        <input
          onChange={this.handleChange}
          name="password"
          placeholder="Password"
        />
        <button onClick={this.handdleRegister}>Submit</button>
      </section>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    username: reduxState.userAuth.username,
    password: reduxState.userAuth.password,
    email: reduxState.userAuth.email,
    id: reduxState.userAuth.id,
    error: reduxState.userAuth.error
  };
};

export default connect(
  mapStatetoProps,
  { updateAuth, register }
)(UserRegistration);
