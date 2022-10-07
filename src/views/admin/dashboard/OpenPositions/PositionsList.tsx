import {
	GetActivePositions,
	GetInactivePositions,
} from '../../../../redux/positions/actions/PositionsActions'
import {
	batch,
	useDispatch,
	useSelector,
} from 'react-redux'

import CreateNew from '../../../../components/buttons/CreateNew'
import List from '../../../../components/openPositions/List'
import LoaderSpinner from '../../../../assets/loaderSpinner'
import {
	AppDispatch,
	State,
} from '../../../../redux/store/store'
import { VIEW_CREATE_NEW_POSITION } from '../../../../config/routes/paths'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PositionsList() {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const activePositions = useSelector(
		(state: State) => state.positions.active_positions,
	)
	const inactivePositions = useSelector(
		(state: State) => state.positions.inactive_positions,
	)
	const loading = useSelector(
		(state: State) => state.positions.loading,
	)
	const success = useSelector(
		(state: State) => state.positions.success,
	)
	const error = useSelector(
		(state: State) => state.positions.error,
	)

	const isAdmin = true

	useEffect(() => {
		window.document.title = 'WorkAt - Open Positions'
		batch(() => {
			dispatch(GetActivePositions(6, 1))
			dispatch(GetInactivePositions(6, 1))
		})
	}, [dispatch])

	return (
		<div className="mt-20 pt-12  overflow-x-hidden max-w-[920px] mx-auto w-[95%]">
			{isAdmin ? (
				<div className="flex justify-end  pb-6">
					<CreateNew
						onClick={() =>
							navigate(VIEW_CREATE_NEW_POSITION)
						}
					/>
				</div>
			) : null}
			{isAdmin ? (
				<div className="space-y-20">
					<List
						title="Active Searches"
						items={activePositions}
						inactive={false}
						isAdmin
					/>
					{loading ? (
						<div className="absolute w-full h-[55rem] top-0 left-0">
							<LoaderSpinner
								width="w-10"
								height="h-10"
								classes="absolute laptop:top-40 laptop:left-[40rem] dektop:top-40 desktop:left-[55rem]"
							/>
						</div>
					) : null}
					<List
						title="Inactive Searches"
						items={inactivePositions}
						inactive={true}
						isAdmin
					/>
				</div>
			) : (
				<List
					title="Your Active Searches"
					items={activePositions}
					inactive={true}
				/>
			)}
			<div
				className={
					error.message !== '' &&
					error.message.includes('Network')
						? 'transform -translate-y-0 transition ease-in-out duration-200 flex justify-center'
						: 'duration-200 opacity-0 invisible'
				}
			>
				{error.message !== '' && (
					<span className="p-2 px-3 bg-[#F84D44] rounded-full text-white text-center font-raleway font-seibold">
						There was an error while connecting to the
						server. Please check your internet connection
						and try again.
					</span>
				)}
			</div>
			<div
				className={
					success.message !== ''
						? 'absolute inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 '
						: 'duration-200 opacity-0 invisible'
				}
			>
				{success.message !== '' && (
					<div className="relative inline-block align-middle bg-white rounded-lg text-center overflow-hidden shadow-xl  w-[613px] h-[330px] flex justify-center items-center flex-col">
						<img
							src={
								process.env.PUBLIC_URL +
								`/images/approve.svg`
							}
							alt="Approved img"
						/>
						<p className="mt-10">{success.message}</p>
					</div>
				)}
			</div>
		</div>
	)
}
