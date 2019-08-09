import React, { Component } from "react";
import { Link } from "react-router-dom";
import Listings from "./Listings";
require("dotenv").config();

export default class AgentMain extends Component {
  handleZillow = e => {
    var Zillow = require("node-zillow");
    var zwsid = process.env.ZWSID;
    var zillow = new Zillow("X1-ZWz17qio3bjx1n_7galu");
    var address = "5064 Clover Haven Ct";
    var city = " Dallas Texas";
    var aUri = encodeURIComponent(address);
    var cUri = encodeURIComponent(city);
    var parameters = {
      address: aUri,
      citystatezip: cUri
    };
    zillow.get("GetSearchResults", parameters).then(function(results) {
      console.log(results);
    });
  };
  render() {
    return (
      <div>
        <Link to="/listingForm">
          <h1>Add a Listing</h1>
        </Link>
        <button onClick={this.handleZillow}>zillow</button>

        <h1>Your Listings</h1>
        <Listings />
      </div>
    );
  }
}
