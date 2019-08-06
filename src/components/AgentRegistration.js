import React, { Component } from "react";

export default class AgentRegistration extends Component {
  render() {
    return (
      <div>
        <input placeholder="Email" />
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Your Picture" />
        <input placeholder="City" />
        <input placeholder="State" />
        <input placeholder="Phone Number" />
        <input placeholder="Password" />
        <button>Submit</button>
      </div>
    );
  }
}
