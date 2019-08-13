import React, { Component } from "react";

export default class ContactForm extends Component {
  render() {
    return (
      <form mehtod="POST" action="send">
        <input placeholder="phone number" name="phone" />
        <input placheholder="name" name="name" />
        <input placeholder="email" name="email" />
        <input placeholder="message" name="message" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
