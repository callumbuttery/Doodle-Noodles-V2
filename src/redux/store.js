import blockchainReducer from "./blockchain/Reducer";
import dataReducer from "./data/Reducer";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
