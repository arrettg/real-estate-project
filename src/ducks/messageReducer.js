import React from "react";
const reducerHook = React.useReducer(reducer, initState);
export const CTX = React.createContext();

const initState = {
  genral: [
    { from: "bob", msg: "hello" },
    { from: "bab", msg: "hello" },
    { from: "bo", msg: "hello" }
  ],
  topic2: [
    { from: "bob", msg: "hello" },
    { from: "bab", msg: "hello" },
    { from: "bo", msg: "hello" }
  ]
};

export function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECIEVE_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }]
      };
    default:
      return state;
  }
}

export default function messageReducer(props) {
  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
