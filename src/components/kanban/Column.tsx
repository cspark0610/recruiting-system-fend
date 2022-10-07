import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineDown } from 'react-icons/ai'
import { IColumnInfo } from '../../config/kanban/columnGuideInfo'
import { ICandidate } from '../../redux/candidates/types/data'
import { State } from '../../redux/store/store'
import Collapsable from './Collapsable'
import Card from './Card'
import LoaderSpinner from '../../assets/loaderSpinner'

type ColumnProps = {
	title: string
	column_info: IColumnInfo
	items: ICandidate[]
}

export default function Column({
	title,
	column_info,
	items,
}: ColumnProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const isLoading = useSelector(
		(state: State) => state.info.loading,
	)
	const error = useSelector(
		(state: State) => state.info.error,
	)

	return (
		<div className="w-80 relative">
			<button
				className="flex font-semibold font-raleway ml-24 text-2xl text-center pb-6"
				onClick={() => setIsOpen(!isOpen)}
			>
				{title}{' '}
				<AiOutlineDown
					className={
						isOpen
							? 'w-4 mt-1 ml-4 rotate-180 transition ease-in-out duration-200'
							: 'w-4 mt-1 ml-4 duration-200'
					}
				/>
			</button>
			<>
				<Collapsable info={column_info} />
				<div
					className={
						isOpen
							? 'transform translate-y-56 transition ease-in-out duration-500 absolute top-10 bg-[#F0F0F4] h-[42rem] w-80 rounded-lg pt-4 pb-4 space-y-1 overflow-y-auto overflow-x-hidden scroll-smooth'
							: 'transition ease-out duration-300 absolute top-12 bg-[#F0F0F4] h-[42rem] w-80 rounded-lg pt-4 pb-4 space-y-1 overflow-y-auto overflow-x-hidden scroll-smooth'
					}
				>
					{isLoading ? (
						<LoaderSpinner
							height="h-14"
							width="w-12"
							classes="absolute top-40 left-32"
						/>
					) : (
						<>
							{items.length === 0 && !error.message ? (
								<p className="text-center mt-40 text-lg font-bold font-raleway">
									No candidates...
								</p>
							) : error.message !== '' ? (
								<p className="text-center mt-40 text-lg font-bold font-raleway">
									{error.message}
								</p>
							) : (
								items.map((item: ICandidate) => {
									return (
										item.postulations!.length > 0 &&
										item.postulations!.map(postulation => {
											return (
												<Card
													key={postulation._id}
													postulationId={
														postulation._id || ''
													}
													_id={item._id || ''}
													name={item.name}
													position={
														postulation?.position?.title
													}
													secondary_status={
														postulation.secondary_status
													}
													main_status={
														postulation.main_status
													}
												/>
											)
										})
									)
								})
							)}
						</>
					)}
				</div>
			</>
		</div>
	)
}
