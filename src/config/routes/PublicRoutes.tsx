import { lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'

import {
	VIEW_404,
	VIEW_BEFORE_STARTING,
	VIEW_DETAILS,
	VIEW_APPLY,
	VIEW_APPLY_THANKS,
	VIEW_INSTRUCTIONS,
	VIEW_REQUIRED_STEPS,
	VIEW_VIDEO_COMPLETED,
	VIEW_WELCOME,
	VIEW_WELCOME_THANKS,
	VIEW_REGISTER,
} from './paths'

const Data = lazy(() => import('@/views/first_link/Data'))
const Thanks = lazy(
	() => import('@/views/first_link/Thanks'),
)
const Welcome = lazy(
	() => import('@/views/second_link/Welcome'),
)
const Instructions = lazy(
	() => import('@/views/second_link/Instructions'),
)
const Required = lazy(
	() => import('@/views/second_link/Required'),
)
const NotFound = lazy(
	() => import('@/views/error/NotFound'),
)
const Details = lazy(
	() => import('@/views/second_link/Details'),
)
const VideoStart = lazy(
	() => import('@/views/second_link/VideoStart'),
)
const VideoCompleted = lazy(
	() => import('@/views/second_link/VideoCompleted'),
)
const Register = lazy(() => import('@/views/Register'))

const PublicRoutes = () => {
	/*  */
	const { t } = useTranslation()

	return (
		<>
			<Routes>
				<Route
					path={VIEW_REGISTER}
					element={<Register />}
				/>
				{/* First Link */}
				<Route path={VIEW_APPLY} element={<Data />} />
				<Route
					path={VIEW_APPLY_THANKS}
					element={
						<Thanks
							title={t('thank_you_title')}
							FirstLine={t('thank_you_description.part_1')}
							SecondLine={t('thank_you_description.part_2')}
						/>
					}
				/>
				{/* Second Link */}
				<Route
					path={VIEW_INSTRUCTIONS}
					element={<Instructions />}
				/>
				<Route
					path={VIEW_REQUIRED_STEPS}
					element={<Required />}
				/>
				<Route path={VIEW_DETAILS} element={<Details />} />
				<Route
					path={VIEW_BEFORE_STARTING}
					element={<VideoStart />}
				/>
				<Route
					path={VIEW_VIDEO_COMPLETED}
					element={<VideoCompleted />}
				/>
				<Route
					path={VIEW_WELCOME_THANKS}
					element={
						<Thanks
							title={t('thank_you_video.title')}
							FirstLine={t(
								'thank_you_video.description.line_1',
							)}
							SecondLine={t(
								'thank_you_video.description.line_2',
							)}
						/>
					}
				/>
				<Route path={VIEW_WELCOME} element={<Welcome />} />
				{/* Company dashboard */}
				<Route path={VIEW_404} element={<NotFound />} />
			</Routes>
		</>
	)
}

export default PublicRoutes
