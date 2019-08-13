import axios from "axios";

const initialState = {
  first_name: "",
  last_name: "",
  image: "",
  city: "",
  state: "",
  phone: null,
  email: "",
  agents: []
};

const GET_AGENTS = "GET_AGENTS";
const UPDATE = "UPDATE";

export function getAgents(city, state) {
  let data = axios.get(`/api/agents?city=${city}&state=${state}`);
  return {
    type: GET_AGENTS,
    payload: data
  };
}

export function update(name, value) {
  return {
    type: UPDATE,
    payload: { name, value }
  };
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE:
      return { ...state, [payload.name]: payload.value };
    case `${GET_AGENTS}_FULFILLED`:
      return { ...state, agents: payload.data };
    default:
      return state;
  }
}
