import { Routes, Route } from "react-router-dom";
import { VIEW_LOGIN } from "./paths";
import Login from "../../views/login/Login";

const LoginRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={VIEW_LOGIN} element={<Login />} />
      </Routes>
    </>
  );
};

export default LoginRoutes;
