import { Routes, Route } from 'react-router-dom';
import { VIEW_KANBAN } from './paths';
import CandidateStatus from '../../views/admin/dashboard/CandidateStatus/CandidateStatus';
import Navbar from '../../components/kanban/Navbar';

export default function AdminRoutes() {
  return (
    <>
      <Navbar userName="Juan" />
      <Routes>
        <Route path={VIEW_KANBAN} element={<CandidateStatus />} />
      </Routes>
    </>
  );
}
