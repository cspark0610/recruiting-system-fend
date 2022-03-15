import React from "react";
/* Router DOM */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* Pages */
import Main from "./pages/Link1/Main";
import Thanks from "./pages/Link1/Thanks";
import Welcome from "./pages/Link2/Welcome";
import Survey from "./pages/Link2/Survey";
import Details from "./pages/Link2/Details";

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
        <Route path="/survey">
          <Survey />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
