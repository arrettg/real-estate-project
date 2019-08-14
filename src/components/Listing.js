import React from "react";
import { Link } from "react-router-dom";
import ListingForm from "./ListingForm";

export default function Listing(props) {
  const { property, key, removeProperty, editProperty } = props;
  console.log(property);
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
        onClick={() =>
          editProperty(
            property.city,
            property.state,
            property.address,
            property.zipcode,
            property.image,
            property.price,
            property.property_id
          )
        }
      >
        Submit edit
      </button>
      <button onClick={() => removeProperty(property.property_id)}>
        Delete
      </button>
    </div>
  );
}
