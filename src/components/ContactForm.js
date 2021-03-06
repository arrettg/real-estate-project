import React, { Component } from "react";
import axios from "axios";
import UserNav from "./UserNav";

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <div className="col-sm-4 offset-sm-4">
        <UserNav />
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <h1>Contact Us</h1>
          <div className="form-group">
            <label for="name">Your Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <input className="form-control" rows="5" id="message" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
