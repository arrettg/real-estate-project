import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userAuthReducer from "./ducks/userAuthReducer";
import agentAuthReducer from "./ducks/agentAuthReducer";
import propertyReducer from "./ducks/propertyReducer";

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  agentAuth: agentAuthReducer,
  property: propertyReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
