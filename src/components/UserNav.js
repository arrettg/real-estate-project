import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/userNav.scss";

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
        <i onClick={this.handleSlide} className="material-icons">
          menu
        </i>
        <ul className={this.state.slide}>
          <li>Sign Out</li>
        </ul>
      </div>
    );
  }
}
