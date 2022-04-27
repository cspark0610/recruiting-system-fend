import { Routes, Route } from "react-router-dom";
import { VIEW_KANBAN, VIEW_USER_DIALOG } from "./paths";
import CandidateStatus from "../../views/admin/dashboard/CandidateStatus/CandidateStatus";
import Navbar from "../../components/kanban/Navbar";
import UserView from "../../views/admin/UserView";

export default function AdminRoutes() {
  return (
<<<<<<< Updated upstream
    <>
      <Navbar userName="Juan" />
      <Routes>
        <Route path={VIEW_KANBAN} element={<CandidateStatus />} />
      </Routes>
    </>
=======
    <Routes>
      <Route path="/admin" element={<Navbar userName="Juan" />} />
      <Route path={VIEW_KANBAN} element={<CandidateStatus />} />
      <Route path={VIEW_USER_DIALOG} element={<UserView />} />
    </Routes>
>>>>>>> Stashed changes
  );
}
