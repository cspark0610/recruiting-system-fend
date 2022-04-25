import { Routes, Route } from 'react-router-dom';
import { VIEW_KANBAN } from './paths';
import CandidateStatus from '../../views/admin/dashboard/CandidateStatus/CandidateStatus';
import Navbar from '../../components/navbar/kanban/Navbar';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Navbar userName="Juan" />} />
      <Route path={VIEW_KANBAN} element={<CandidateStatus />} />
    </Routes>
  );
}
