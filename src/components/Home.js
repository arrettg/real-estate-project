import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/home.scss";

export default class Home extends Component {
  render() {
    return (
      <>
        <main>
          <h1>
            If you are a in search of a great real estate agent you have come to
            the right place. click I am a user below to begin searching for your
            next agent. If you are a real estate agent click Agent to partner
            with us.
          </h1>
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
