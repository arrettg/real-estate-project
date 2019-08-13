import React from "react";
import { Link } from "react-router-dom";

export default function Agent(props) {
  const { agent } = props;
  return (
    <div>
      <h1>{agent.first_name}</h1>
      <h1>{agent.last_name}</h1>
      <img src={agent.image} alt="pic" />
      <h1>{agent.city}</h1>
      <h1>{agent.state}</h1>
      <h1>{agent.phone}</h1>
      <h1>{agent.email}</h1>
      <Link to="/contact">
        <button>contact</button>
      </Link>
    </div>
  );
}
