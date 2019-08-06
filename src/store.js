import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userAuthReducer from "./ducks/userAuthReducer";

const rootReducer = combineReducers({
  userAuth: userAuthReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
