import { Route, Routes } from 'react-router-dom'
import {
	NEW_VIDEOQUESTION,
	VIEW_COMPARING,
	VIEW_CREATE_NEW_POSITION,
	VIEW_EDIT_POSITION,
	VIEW_EXPERT,
	VIEW_KANBAN,
	VIEW_OPEN_POSITIONS,
	VIEW_PROFILE,
	VIEW_VIDEOQUESTIONS_BY_POSITION,
} from './paths'

import CandidateStatus from '../../views/admin/dashboard/CandidateStatus/CandidateStatus'
import ComparingView from '../../views/admin/dashboard/ExpertView/ComparingView'
import ExpertView from '../../views/admin/dashboard/ExpertView/ExpertView'
import Navbar from '../../components/kanban/Navbar'
import NewPosition from '../../views/admin/dashboard/OpenPositions/NewPosition'
import PositionsList from '../../views/admin/dashboard/OpenPositions/PositionsList'
import PrivateRoute from '../../components/Routes/PrivateRoute'
import Profile from '../../views/admin/dashboard/Profile/Profile'
import AdminVideoQuestions from '../../views/admin/dashboard/VideoQuestions/AdminVideoQuestions'
import NewVideoQuestions from '../../views/admin/dashboard/VideoQuestions/NewVideoQuestions'

export default function AdminRoutes() {
	return (
		<>
			<Navbar />
			<div className="absolute w-full  left-0 h-full -z-10">
				<img
					className="mx-auto mt-5 w-full max-w-[1440px] hidden"
					src={
						process.env.PUBLIC_URL +
						'/images/Background Cloud.svg'
					}
					alt="background"
				/>
			</div>
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
					path={VIEW_CREATE_NEW_POSITION}
					element={
						<PrivateRoute>
							<NewPosition />
						</PrivateRoute>
					}
				/>
				<Route
					path={`${VIEW_EDIT_POSITION}/:_id`}
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
							<ExpertView />
						</PrivateRoute>
					}
				/>
				<Route
					path={VIEW_PROFILE}
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
				<Route
					path={VIEW_COMPARING}
					element={
						<PrivateRoute>
							<ComparingView />
						</PrivateRoute>
					}
				/>
				<Route
					path={VIEW_VIDEOQUESTIONS_BY_POSITION}
					element={
						<PrivateRoute>
							<AdminVideoQuestions />
						</PrivateRoute>
					}
				/>
				<Route
					path={NEW_VIDEOQUESTION}
					element={
						<PrivateRoute>
							<NewVideoQuestions />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	)
}
