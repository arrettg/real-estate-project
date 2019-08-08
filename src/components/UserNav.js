import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserNav extends Component {
  constructor() {
    super();
    this.state = {
      slide: "close"
    };
  }

  handleSlide = () => {
    if (this.state.slide === "close") {
      this.setState({ slide: "open" });
    } else {
      this.setState({ slide: "close" });
    }
  };
  render() {
    return (
      <div>
        <i className="material-icons">menu</i>
        <ul>
          <li>Sign Out</li>
        </ul>
      </div>
    );
  }
}
