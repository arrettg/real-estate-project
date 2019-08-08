import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { register, updateAuth } from "../ducks/agentAuthReducer";

class AgentRegistration extends Component {
  handleChange = e => {
    this.props.updateAuth(e.target.name, e.target.value);
  };
  handleRegister = e => {
    this.props.register(
      this.props.firstName,
      this.props.lastName,
      this.props.image,
      this.props.city,
      this.props.state,
      this.props.phone,
      this.props.email,
      this.props.password
    );
  };
  render() {
    return (
      <div>
        {this.props.id ? <Redirect to="/main/agent" /> : null}
        <input
          onChange={this.handleChange}
          name="firstName"
          placeholder="First Name"
        />
        <input
          onChange={this.handleChange}
          name="lastName"
          placeholder="Last Name"
        />
        <input
          onChange={this.handleChange}
          name="image"
          placeholder="Your Picture"
        />
        <input onChange={this.handleChange} name="city" placeholder="City" />
        <input onChange={this.handleChange} name="state" placeholder="State" />
        <input
          type="number"
          onChange={this.handleChange}
          name="phone"
          placeholder="Phone Number"
        />
        <input onChange={this.handleChange} name="email" placeholder="Email" />
        <input
          onChange={this.handleChange}
          name="password"
          placeholder="Password"
        />
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    email: reduxState.agentAuth.email,
    firstName: reduxState.agentAuth.firstName,
    lastName: reduxState.agentAuth.lastName,
    image: reduxState.agentAuth.image,
    city: reduxState.agentAuth.city,
    state: reduxState.agentAuth.state,
    phone: reduxState.agentAuth.phone,
    password: reduxState.agentAuth.password,
    id: reduxState.agentAuth.id,
    error: reduxState.agentAuth.error
  };
};

export default connect(
  mapStatetoProps,
  { updateAuth, register }
)(AgentRegistration);
