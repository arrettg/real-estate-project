import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAuth, addProperty } from "../ducks/propertyReducer";

class AgentMain extends Component {
  handleChange = e => {
    this.props.updateAuth(e.target.name, e.target.value);
  };

  handleAdd = e => {
    this.props.addProperty(
      this.props.city,
      this.props.state,
      this.props.address,
      this.props.zipcode,
      this.props.image,
      this.props.price
    );
  };
  render() {
    return (
      <div>
        <h1>Add a Listing</h1>
        <input onChange={this.handleChange} name="city" placeholder="City" />
        <input onChange={this.handleChange} name="state" placeholder="State" />
        <input
          onChange={this.handleChange}
          name="address"
          placeholder="Address"
        />
        <input
          onChange={this.handleChange}
          name="zipcode"
          placeholder="Zipcode"
        />
        <input
          onChange={this.handleChange}
          name="image"
          placeholder="Picture"
        />
        <input onChange={this.handleChange} name="price" placeholder="Price" />
        <button onClick={this.handleAdd}>List</button>
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
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
  { updateAuth, addProperty }
)(AgentMain);
