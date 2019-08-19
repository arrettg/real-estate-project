import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userAuthReducer from "./ducks/userAuthReducer";
import agentAuthReducer from "./ducks/agentAuthReducer";
import propertyReducer from "./ducks/propertyReducer";
import agentReducer from "./ducks/agentReducer";
import messageReducer from "./ducks/messageReducer";

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  agentAuth: agentAuthReducer,
  property: propertyReducer,
  agent: agentReducer,
  message: messageReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
