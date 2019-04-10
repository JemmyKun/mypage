import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
