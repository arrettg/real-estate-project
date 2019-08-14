import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateAuth,
  addProperty,
  updateProperty
} from "../ducks/propertyReducer";
import Listings from "./Listings";
import "../styles/listingForm.scss";

class ListingForm extends Component {
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
    console.log(this.props);
    return (
      <>
        <form>
          <h1>Add a Listing</h1>

          <input
            onChange={this.handleChange}
            name="city"
            placeholder="  City"
          />
          <select onChange={this.handleChange} name="state">
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
            <option value="DC">DC</option>
          </select>

          <input
            onChange={this.handleChange}
            name="address"
            placeholder="  Address"
            type="text"
          />
          <input
            onChange={this.handleChange}
            name="zipcode"
            placeholder="  Zipcode"
            type="number"
          />
          <input
            onChange={this.handleChange}
            name="image"
            placeholder="  Picture"
          />
          <input
            onChange={this.handleChange}
            name="price"
            placeholder="  Price"
            type="number"
          />
          <button onClick={this.handleAdd}>Create</button>
          <button onClick={this.handleEdit}>Update</button>
          <h1>Your Listings</h1>
          <Listings />
        </form>
      </>
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
  { updateAuth, addProperty, updateProperty }
)(ListingForm);
