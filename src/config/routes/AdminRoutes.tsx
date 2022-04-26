import { Routes, Route } from 'react-router-dom';
import { VIEW_KANBAN } from './paths';
import CandidateStatus from '../../views/admin/dashboard/CandidateStatus/CandidateStatus';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path={VIEW_KANBAN} element={<CandidateStatus />} />
    </Routes>
  );
}
