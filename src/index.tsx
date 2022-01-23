import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import { store } from "./redux/store";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <div><App /><App2 /><App3 /></div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

