import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import {
	GetAllCandidates,
	CleanCandidateErrors,
	CleanFilters,
} from '@/redux/candidates/actions/CandidateAction'
import Filters from './Filters'
import Search from './Search'
import CreateNewDropdown from './CreateNewDropdown'
import CreateNew from '../buttons/CreateNew'
import detectOutsideClick from '@/utils/detectOutsideClick'
import { AppDispatch } from '@/redux/store/store'

export default function KanbanOptions() {
	const dispatch = useDispatch<AppDispatch>()

	const [showSearch, setShowSearch] =
		useState<boolean>(false)
	const [showCreateDropdown, setShowCreateDropdown] =
		useState<boolean>(false)

	const wrapperRef = useRef<HTMLDivElement>(null)
	detectOutsideClick(wrapperRef, [setShowCreateDropdown])

	const handleCleanFilters = () => {
		dispatch(CleanCandidateErrors(dispatch))
		dispatch(CleanFilters(dispatch))
		dispatch(GetAllCandidates())
	}

	return (
		<div className="flex justify-between pb-2 mt-36 ml-48 laptop:ml-0 desktop:ml-48 w-[80rem] border-b-2">
			<div className="flex space-x-4">
				<Filters />
				<div
					className={
						showSearch
							? 'transition ease-in-out duration-200 flex pl-2 bg-[#F5F5F5] rounded-[5px]'
							: 'flex pl-2 bg-white'
					}
				>
					<label
						htmlFor="query"
						className={
							showSearch
								? 'hidden'
								: 'mt-[0.75rem] hover:cursor-pointer'
						}
						onClick={() => setShowSearch(!showSearch)}
					>
						{' '}
						<BsSearch />{' '}
					</label>
					{showSearch ? <Search /> : null}
				</div>
				<button
					className="text-[#00ADEF] transition ease duration-200 hover:bg-sky-400 hover:text-white px-2 rounded-md font-raleway"
					onClick={handleCleanFilters}
				>
					Clean Filters
				</button>
			</div>
			<div className="mr-16 relative" ref={wrapperRef}>
				<CreateNew
					onClick={() =>
						setShowCreateDropdown(!showCreateDropdown)
					}
				/>
				<div
					className={
						showCreateDropdown
							? 'transition ease-in-out duration-200 opacity-100 absolute z-10 rounded-sm mt-2 bg-white shadow-md'
							: 'duration-200 opacity-0 invisible absolute z-10 rounded-sm mt-2 bg-white shadow-md'
					}
				>
					<CreateNewDropdown
						setShowCreateDropdown={setShowCreateDropdown}
					/>
				</div>
			</div>
		</div>
	)
}
