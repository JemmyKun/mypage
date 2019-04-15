import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const reducer = (state = [], action) => {
  return state;
};
const middleWares = [logger, thunk];
const store = createStore(reducer, applyMiddleware(...middleWares));

console.log("store:", store);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
