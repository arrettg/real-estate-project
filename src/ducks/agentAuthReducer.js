import axios from "axios";

const initalState = {
  firstName: "",
  lastName: "",
  image: "",
  city: "",
  state: "",
  phone: null,
  email: "",
  password: "",
  id: null,
  error: ""
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const UPDATE_AUTH = "UPDATE_AUTH";

export function updateAuth(name, value) {
  return {
    type: UPDATE_AUTH,
    payload: { name, value }
  };
}

export function login(email, password) {
  let data = axios.post("/auth/login/agent", { email, password });
  return {
    type: LOGIN,
    payload: data
  };
}

export function register(
  firstName,
  lastName,
  image,
  city,
  state,
  phone,
  email,
  password
) {
  let data = axios.post("/auth/register/agent", {
    firstName,
    lastName,
    image,
    city,
    state,
    phone,
    email,
    password
  });
  return {
    type: REGISTER,
    payload: data
  };
}

export default function reducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_AUTH:
      return { ...state, [payload.name]: payload.value, error: "" };
    case `${LOGIN}_FULFILLED`:
      return { ...state, password: "", id: payload.data.id, error: "" };
    case `${LOGIN}_REJECTED`:
      return { ...state, password: "", email: "", error: "login" };
    case `${REGISTER}_FULFILLED`:
      return { ...state, password: "", id: payload.data.id };
    case `${REGISTER}_REJECTED`:
      return { ...state, password: "", email: "", error: "register" };
    default:
      return state;
  }
}
