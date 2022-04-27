import { Routes, Route } from "react-router-dom";
import { VIEW_KANBAN, VIEW_USER_DIALOG } from "./paths";
import CandidateStatus from "../../views/admin/dashboard/CandidateStatus/CandidateStatus";
import Navbar from "../../components/kanban/Navbar";
import UserView from "../../views/admin/UserView";

export default function AdminRoutes() {
  return (
    <>
      <Navbar userName="Juan" />
      <Routes>
        <Route path={VIEW_KANBAN} element={<CandidateStatus />} />
        <Route path={VIEW_USER_DIALOG} element={<UserView />} />
      </Routes>
    </>
  );
}
