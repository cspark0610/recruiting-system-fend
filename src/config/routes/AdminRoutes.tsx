import { Routes, Route } from 'react-router-dom';
import {
  VIEW_COMPARING,
  VIEW_EXPERT,
  VIEW_KANBAN,
  VIEW_OPEN_POSITIONS,
  VIIEW_CREATE_NEW_POSITION,
} from './paths';
import CandidateStatus from '../../views/admin/dashboard/CandidateStatus/CandidateStatus';
import Navbar from '../../components/kanban/Navbar';
import NewPosition from '../../views/admin/dashboard/OpenPositions/NewPosition';
import PositionsList from '../../views/admin/dashboard/OpenPositions/PositionsList';
import PrivateRoute from '../../components/Routes/PrivateRoute';
import ExpertView from '../../views/admin/dashboard/ExpertView/ExpertView';
import ComparingView from '../../views/admin/dashboard/ExpertView/ComparingView';

export default function AdminRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path={VIEW_KANBAN}
          element={
            <PrivateRoute>
              <CandidateStatus />
            </PrivateRoute>
          }
        />
        <Route
          path={VIEW_OPEN_POSITIONS}
          element={
            <PrivateRoute>
              <PositionsList />
            </PrivateRoute>
          }
        />
        <Route
          path={VIIEW_CREATE_NEW_POSITION}
          element={
            <PrivateRoute>
              <NewPosition />
            </PrivateRoute>
          }
        />
        <Route
          path={VIEW_EXPERT}
          element={
            <PrivateRoute>
              <ExpertView/>
            </PrivateRoute>
          }
        />
        <Route
          path={VIEW_COMPARING}
          element={
            <PrivateRoute>
              <ComparingView/>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
