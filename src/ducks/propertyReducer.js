import axios from "axios";

const intialState = {
  city: "",
  state: "",
  address: "",
  zipcode: null,
  image: "",
  price: "",
  error: "",
  homes: []
};

const GET_PROPERTIES = "GET_PROPERTIES";
const UPDATE_AUTH = "UPDATE_AUTH";
const ADD_PROPERTY = "ADD_PROPERTY";
const UPDATE_PROPERTY = "UPDATE_PROPERTY";
const DELETE_PROPERTY = "DELETE_PROPERTY";

export function getProperties() {
  let data = axios.get("/api/properties");
  return {
    type: GET_PROPERTIES,
    payload: data
  };
}

export function deleteProperty(id) {
  let data = axios.delete(`/api/properties/${id}`);
  return {
    type: DELETE_PROPERTY,
    payload: data
  };
}

export function updateProperty(
  city,
  state,
  zipcode,
  address,
  image,
  price,
  id
) {
  let data = axios.put(`/api/properties/${id}`, {
    city,
    state,
    address,
    zipcode,
    image,
    price,
    id
  });
  return {
    type: UPDATE_PROPERTY,
    payload: data
  };
}

export function addProperty(city, state, address, zipcode, image, price) {
  let data = axios.post("/api/properties", {
    city,
    state,
    address,
    zipcode,
    image,
    price
  });
  return {
    type: ADD_PROPERTY,
    payload: data
  };
}

export function updateAuth(name, value) {
  return {
    type: UPDATE_AUTH,
    payload: { name, value }
  };
}

export default function(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_AUTH:
      return { ...state, [payload.name]: payload.value, error: "" };
    case `${ADD_PROPERTY}_FULFILLED`:
      return { ...state, error: "" };
    case `${ADD_PROPERTY}_REJECTED`:
      return { ...state, error: "add" };
    case `${UPDATE_PROPERTY}_FULFILLED`:
      return { ...state, error: "" };
    case `${UPDATE_PROPERTY}_REJECTED`:
      return { ...state, error: "" };
    case `${DELETE_PROPERTY}_FULFILLED`:
      return { ...state, homes: payload };
    case `${GET_PROPERTIES}_FULFILLED`:
      return { ...state, homes: payload.data };
    default:
      return state;
  }
}
