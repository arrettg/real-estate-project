import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/register.scss";

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
      <section>
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
        <select onChange={this.handleChange} name="state">
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
          <option value="DC">DC</option>
        </select>
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
      </section>
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
