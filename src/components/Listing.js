import React from "react";
import { Link } from "react-router-dom";

export default function Listing(props) {
  const { property } = props;
  return (
    <div>
      <h1>{property.city}</h1>
      <h1>{property.state}</h1>
      <h1>{property.zipcode}</h1>
      <img src={property.image} alt="pic" />
      <h1>{property.price}</h1>
      <h1>{property.address}</h1>
      <Link to="/listingForm">
        <button>Edit</button>
      </Link>
      <button>Delete</button>
    </div>
  );
}
