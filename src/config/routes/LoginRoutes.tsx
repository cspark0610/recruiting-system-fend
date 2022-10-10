import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { VIEW_KANBAN, VIEW_LOGIN } from './paths'

const Login = lazy(() => import('@/views/login/Login'))

const LoginRoutes = () => {
	const accessToken = window.localStorage.getItem('access')

	if (accessToken) {
		window.location.assign(VIEW_KANBAN)
	}

	return (
		<>
			<Routes>
				<Route path={VIEW_LOGIN} element={<Login />} />
			</Routes>
		</>
	)
}

export default LoginRoutes
