import { Routes, Route } from 'react-router-dom';
import {
  VIEW_KANBAN,
  VIEW_OPEN_POSITIONS,
  VIIEW_CREATE_NEW_POSITION,
} from './paths';
import CandidateStatus from '../../views/admin/dashboard/CandidateStatus/CandidateStatus';
import Navbar from '../../components/kanban/Navbar';
import NewPosition from '../../views/admin/dashboard/OpenPositions/NewPosition';
import PositionsList from '../../views/admin/dashboard/OpenPositions/PositionsList';

export default function AdminRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={VIEW_KANBAN} element={<CandidateStatus />} />
        <Route path={VIEW_OPEN_POSITIONS} element={<PositionsList />} />
        <Route path={VIIEW_CREATE_NEW_POSITION} element={<NewPosition />} />
      </Routes>
    </>
  );
}
