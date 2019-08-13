import React, { Component } from "react";
import { connect } from "react-redux";
import { getAgents } from "../ducks/agentReducer";
import Agent from "./Agent";

class Agents extends Component {
  componentDidMount() {
    this.props.getAgents(this.props.city, this.props.state);
  }

  render() {
    console.log(this.props);
    let displayAgents = this.props.agents.map(agent => {
      return <Agent agent={agent} key={agent.agent_id} />;
    });
    return (
      <div>
        <h1>Agents</h1>
        <div>{displayAgents}</div>
      </div>
    );
  }
}
let mapStatetoProps = reduxState => {
  return {
    agents: reduxState.agent.agents,
    city: reduxState.agent.city,
    state: reduxState.agent.state
  };
};

export default connect(
  mapStatetoProps,
  { getAgents }
)(Agents);
