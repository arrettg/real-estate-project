import axios from "axios";

const initialState = {
  username: "",
  password: "",
  email: "",
  id: null,
  error: ""
};

const UPDATE_AUTH = "UPDATE_AUTH";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";

export function updateAuth(name, value) {
  return {
    type: UPDATE_AUTH,
    payload: { name, value }
  };
}

export function login(username, password) {
  let data = axios.post("/auth/login/user", { username, password });
  return {
    type: LOGIN,
    payload: data
  };
}
export function logout() {
  let data = axios.get("/auth/logout");
  return {
    type: logout,
    payload: data
  };
}

export function register(username, password, email) {
  let data = axios.post("/auth/register/user", { username, email, password });
  return {
    type: REGISTER,
    payload: data
  };
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_AUTH:
      return { ...state, [payload.name]: payload.value, error: "" };
    case `${LOGIN}_FULFILLED`:
      return { ...state, password: "", id: payload.data.id, error: "" };
    case `${LOGIN}_RJECTED`:
      return { ...state, password: "", username: "", error: "Login" };
    case `${REGISTER}_FULFILLED`:
      return { ...state, password: "", id: payload.data.id, error: "" };
    case `${REGISTER}_REJECTED`:
      return { ...state, password: "", username: "", error: "Register" };
    case `${LOGOUT}_FULFILLED`:
      return { ...state, password: "", username: "", id: null, error: "" };
    default:
      return state;
  }
}
