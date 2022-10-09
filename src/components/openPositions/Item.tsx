import {
	PRODUCTION_PATH,
	VIEW_APPLY_BY_POSITION_ID,
} from '../../config/routes/paths'

import { AiOutlineDown } from 'react-icons/ai'
import CopyLinkButton from '../buttons/CopyLinkButton'
import LoaderSpinner from '../../assets/loaderSpinner'
import { State } from '../../redux/store/store'
import SubMenu from './SubMenu'
import Toggle from './Toggle'
import getPriorityColor from '../../utils/positions'
import { useSelector } from 'react-redux'
import { useState } from 'react'

type ItemProps = {
	positionName: string
	client: string
	designated: string[]
	rie_link: string
	recruiter_filter: string
	inactive: boolean
	priority: string
	_id: string
	isAdmin?: boolean
}

export default function Item({
	positionName,
	client,
	designated,
	inactive,
	rie_link,
	recruiter_filter,
	priority,
	_id,
	isAdmin,
}: ItemProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isToggled, setIsToggled] = useState<boolean>(false)

	const updating = useSelector(
		(state: State) => state.positions.updating,
	)
	const priorityClass = getPriorityColor(priority)

	return (
		<div className="flex flex-col w-full">
			<div className="flex justify-between pl-4 py-4 border-b-2 bg-[#FAFAFA]">
				<div className="flex space-between min-w-[50%] w-2/3">
					{' '}
					{isAdmin ? (
						<Toggle
							inactive={inactive}
							_id={_id}
							isToggled={isToggled}
							setIsToggled={setIsToggled}
						/>
					) : null}
					{updating && isToggled ? (
						<LoaderSpinner
							width="w-7"
							height="h-7"
							classes="mt-3"
						/>
					) : null}
					<div className="w-2/4">
						<a
							href={`${PRODUCTION_PATH}${VIEW_APPLY_BY_POSITION_ID}${_id}`}
							target="_blank"
							rel="noreferrer"
						>
							<p className="ml-2 font-raleway w-full ">
								{positionName} for{' '}
								<span className="font-semibold">
									{client}
								</span>
							</p>
						</a>

						<div className="flex flex-nowrap w-full divide-x divide-black mt-4">
							{designated && designated.length > 0
								? designated.map((user: any, i) => (
										<div key={i}>
											<p className="text-sm px-2 font-raleway">
												{user.name}
											</p>
										</div>
								  ))
								: null}
						</div>
					</div>
					<div className=" flex justify-center items-center ml-2">
						<CopyLinkButton
							className=""
							linkTo={`${PRODUCTION_PATH}${VIEW_APPLY_BY_POSITION_ID}${_id}`}
							icon={true}
						/>
					</div>
				</div>
				<div className="flex space-x-6 mobile:mr-8 laptop:mr-16  items-center w-[30%] justify-end">
					{isAdmin ? (
						<div className=" flex justify-center items-center min-w-fit w-1/3">
							<p
								className={`p-1 px-4  text-sm rounded-lg font-raleway h-fit w-full text-center ${priorityClass}`}
							>
								{priority}
							</p>
						</div>
					) : null}
					<span className="font-raleway">March 15</span>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="font-raleway"
					>
						<AiOutlineDown
							className={isOpen ? ' rotate-180' : ''}
						/>
					</button>
				</div>
			</div>
			{isOpen && (
				<SubMenu
					_id={_id}
					rie_link={rie_link}
					recruiter_filter={recruiter_filter}
				/>
			)}
		</div>
	)
}
