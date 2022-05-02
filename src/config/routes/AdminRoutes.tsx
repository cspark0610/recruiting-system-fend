import { Routes, Route } from 'react-router-dom';
import { VIEW_KANBAN, VIEW_OPEN_POSITIONS, VIEW_USER_DIALOG } from './paths';
import CandidateStatus from '../../views/admin/dashboard/CandidateStatus/CandidateStatus';
import Navbar from '../../components/kanban/Navbar';
import UserView from '../../views/admin/UserView';
import OpenPositions from '../../views/admin/dashboard/CandidateStatus/OpenPositions';

export default function AdminRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={VIEW_KANBAN} element={<CandidateStatus />} />
        <Route path={VIEW_OPEN_POSITIONS} element={<OpenPositions />} />
        <Route path={VIEW_USER_DIALOG} element={<UserView />} />
      </Routes>
    </>
  );
}
