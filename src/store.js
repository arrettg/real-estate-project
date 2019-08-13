import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userAuthReducer from "./ducks/userAuthReducer";
import agentAuthReducer from "./ducks/agentAuthReducer";
import propertyReducer from "./ducks/propertyReducer";
import agentReducer from "./ducks/agentReducer";

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  agentAuth: agentAuthReducer,
  property: propertyReducer,
  agent: agentReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
