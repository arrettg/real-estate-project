import React, { Component } from "react";

export default class UserRegistration extends Component {
  render() {
    return (
      <div>
        <input placeholder="Username" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>Submit</button>
      </div>
    );
  }
}
