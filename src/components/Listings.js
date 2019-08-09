import React, { Component } from "react";
import { connect } from "react-redux";
import { getProperties, updateProperty } from "../ducks/propertyReducer";
import Listing from "./Listing";

class Listings extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

  handleEdit = e => {
    this.props.updateProperty(
      this.props.city,
      this.props.state,
      this.props.address,
      this.props.zipcode,
      this.props.image,
      this.props.price
    );
  };

  render() {
    let displayListings = this.props.homes.map(property => {
      return <Listing property={property} key={property.property_id} />;
    });
    console.log(this.props);
    return (
      <div>
        <h1>Listings</h1>
        <div>{displayListings}</div>
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    homes: reduxState.property.homes
  };
};

export default connect(
  mapStatetoProps,
  { getProperties }
)(Listings);
