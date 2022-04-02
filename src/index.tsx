/* React router */
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

/* Styles scss */
import "./assets/scss/index.scss";

/* Redux */
import { Provider } from "react-redux";
import store from "./store/store";

/* Root component */
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
