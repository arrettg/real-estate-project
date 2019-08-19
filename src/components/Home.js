import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/home.scss";

export default class Home extends Component {
  render() {
    return (
      <>
        <main>
          <img />
          <Link to="/login/user">
            <button>I am a User</button>
          </Link>
          <Link to="/login/agent">
            <button> I am an Agent</button>
          </Link>
        </main>
      </>
    );
  }
}
