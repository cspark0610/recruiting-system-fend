import { Route, Routes } from 'react-router-dom'
import {
	VIEW_COMPARING,
	VIEW_CREATE_NEW_POSITION,
	VIEW_EDIT_POSITION,
	VIEW_EXPERT,
	VIEW_KANBAN,
	VIEW_OPEN_POSITIONS,
	VIEW_PROFILE,
} from './paths'
import { lazy } from 'react'

import PrivateRoute from '@/components/Routes/PrivateRoute'
const CandidateStatus = lazy(
	() =>
		import(
			'@/views/admin/dashboard/CandidateStatus/CandidateStatus'
		),
)
const ComparingView = lazy(
	() =>
		import(
			'@/views/admin/dashboard/ExpertView/ComparingView'
		),
)
const ExpertView = lazy(
	() =>
		import('@/views/admin/dashboard/ExpertView/ExpertView'),
)
const Navbar = lazy(
	() => import('@/components/kanban/Navbar'),
)
const NewPosition = lazy(
	() =>
		import(
			'@/views/admin/dashboard/OpenPositions/NewPosition'
		),
)
const PositionsList = lazy(
	() =>
		import(
			'@/views/admin/dashboard/OpenPositions/PositionsList'
		),
)
const Profile = lazy(
	() => import('@/views/admin/dashboard/Profile/Profile'),
)

export default function AdminRoutes() {
	return (
		<>
			<Navbar />
			<div className="absolute w-full  left-0 h-full -z-10">
				<img
					className="mx-auto mt-5 w-full max-w-[1440px] hidden"
					src={'/images/Background Cloud.svg'}
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
			</Routes>
		</>
	)
}
