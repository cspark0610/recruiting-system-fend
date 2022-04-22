import ReactDOM from "react-dom";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Loading from "./components/extras/Loading";
import "./assets/scss/index.scss";

import store from "./redux/store/store";
import { Provider } from "react-redux";

import "./i18n";

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
