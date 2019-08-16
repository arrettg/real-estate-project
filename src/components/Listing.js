import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateProperty } from "../ducks/propertyReducer";

class Listing extends Component {
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
    const { property, key, removeProperty, editProperty } = this.props;
    console.log(this.props);

    return (
      <div>
        <h1>{property.city}</h1>
        <h1>{property.state}</h1>
        <h1>{property.address}</h1>
        <h1>{property.zipcode}</h1>
        <img src={property.image} alt="pic" />
        <h1>{property.price}</h1>
        <Link to="/listingForm">
          <button>Edit</button>
        </Link>

        <button
          onClick={e => {
            e.preventDefault();
            editProperty(
              this.props.city,
              this.props.state,
              this.props.address,
              this.props.zipcode,
              this.props.image,
              this.props.price,
              property.property_id
            );
          }}
        >
          Submit edit
        </button>
        <button onClick={() => removeProperty(property.property_id)}>
          Delete
        </button>
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
  console.log(reduxState);
  return {
    city: reduxState.property.city,
    state: reduxState.property.state,
    address: reduxState.property.address,
    zipcode: reduxState.property.zipcode,
    image: reduxState.property.image,
    price: reduxState.property.price
  };
};

export default connect(
  mapStatetoProps,
  { updateProperty }
)(Listing);
