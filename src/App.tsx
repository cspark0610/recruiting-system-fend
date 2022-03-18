import React from "react";
/* Router DOM */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* Pages */
import Main from "./pages/Link1/Main";
import Thanks from "./pages/Link1/Thanks";
import Welcome from "./pages/Link2/Welcome";
import RequireSteps from "./pages/Link2/RequireSteps";
import Details from "./pages/Link2/Details";
import WebCamTask from "./pages/Link2/WebCamTask";
import NotFound from "./pages/404/NotFound";
import ModalExit from "./components/modal/ModalExit";
import EmployeeDetails from "./pages/Employees/EmployeeDetails";
import Rules from "./pages/Link2/Rules";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/thanks">
          <Thanks />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/RequireSteps">
          <RequireSteps />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/webcam">
          <WebCamTask />
        </Route>
        <Route path="/exit">
          <ModalExit />
        </Route>
        <Route path="/employee">
          <EmployeeDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
