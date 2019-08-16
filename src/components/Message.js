import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div>
        <input />
        <button>send</button>
        <script src="/socket.io/socket.io.js" />
        <script>var socket = io();</script>
      </div>
    );
  }
}
