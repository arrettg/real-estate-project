import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/userNav.scss";
import { connect } from "react-redux";
import { logout } from "../ducks/userAuthReducer";

class UserNav extends Component {
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
  handleSignout = e => {
    this.props.logout();
  };
  render() {
    return (
      <div>
        <i onClick={this.handleSlide} className="material-icons">
          menu
        </i>
        <ul className={this.state.slide}>
          <li onClick={this.handleSignout}>Sign Out</li>
          <Link to="/main/user">
            <li>Search</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
        </ul>
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    username: reduxState.userAuth.username,
    password: reduxState.userAuth.password,
    id: reduxState.userAuth.id,
    error: reduxState.userAuth.error
  };
};

export default connect(
  mapStatetoProps,
  { logout }
)(UserNav);
