import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./views/Error/NotFound";
import Data from "./views/link1/Data";
import ThankYou from "./views/link1/ThankYou";
import Completed from "./views/link2/Completed";
import Details from "./views/link2/Details";
import RequiredSteps from "./views/link2/RequiredSteps";
import Rules from "./views/link2/Rules";
import Start from "./views/link2/Start";
import Testing from "./views/link2/Testing";
import Welcome from "./views/link2/Welcome";

const App: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Data />}></Route>
      <Route path="/thankyou" element={<ThankYou />}></Route>
      <Route path="/welcome" element={<Welcome />}></Route>
      <Route path="/rules" element={<Rules />}></Route>
      <Route path="/requiredsteps" element={<RequiredSteps />}></Route>
      <Route path="/details" element={<Details />}></Route>
      <Route path="/beforestarting" element={<Start />}></Route>
      <Route path="/taskcompleted" element={<Completed />}></Route>
      <Route path="/testing" element={<Testing />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
