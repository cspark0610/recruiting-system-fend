import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducer from "../reducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
