import { lazy } from 'react'
import { VIEW_LOGIN } from './config/routes/paths'
const PublicRoutes = lazy(() => import('./config/routes/PublicRoutes'))
const AdminRoutes = lazy(() => import('./config/routes/AdminRoutes'))
const LoginRoutes = lazy(() => import('./config/routes/LoginRoutes'))
const App = () => {
	const currentUrl = window.location.pathname.split('/')

	if (currentUrl[0] === '' && currentUrl[1] === '') {
		window.location.assign(VIEW_LOGIN)
	}

	return (
		<div
			className={
				currentUrl[1] !== 'admin'
					? 'mobile:bg-mobile tablet:bg-cloud laptop:bg-cloud bg-no-repeat bg-center bg-cover bg-origin-content h-screen w-full'
					: 'w-full admin__container'
			}
		>
			<div className="max-w-screen-xl laptop:container laptop:mx-auto">
				{currentUrl[1] === 'admin' ? (
					<AdminRoutes />
				) : currentUrl[1] === 'login' ? (
					<LoginRoutes />
				) : (
					<PublicRoutes />
				)}
			</div>
		</div>
	)
}

export default App
