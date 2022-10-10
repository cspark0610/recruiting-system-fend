import { useState } from 'react'
import {
	AiOutlineUp as ArrowUp,
	AiOutlineDown as ArrowDown,
} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { GetCandidatesFiltered } from '@/redux/candidates/actions/CandidateAction'
import { IPosition } from '@/redux/positions/types/data'
import { AppDispatch } from '@/redux/store/store'
import Apply from '@/components/buttons/Apply'

interface TableHeaderProps {
	positions: IPosition[]
}

const TableHeader = ({ positions }: TableHeaderProps) => {
	const dispatch = useDispatch<AppDispatch>()
	const [togglePosition, setTogglePosition] =
		useState(false)
	const [_position, setPosition] = useState<Array<string>>(
		[],
	)
	const [allPositionsSelected, setAllPositionsSelected] =
		useState<boolean>(false)

	const handlePositionCheck = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (e.target.checked) {
			setPosition([..._position, e.target.value])
		} else {
			setPosition([
				..._position.filter(
					item => item !== e.target.value,
				),
			])
		}
	}

	const handleActionDispatch = () => {
		// if no filters selected, no action is dispatched
		if (_position.length === 0) return

		dispatch(
			GetCandidatesFiltered({
				position: _position,
				status: [],
				query: '',
			}),
		)
		setTogglePosition(false)
	}

	// adds a checked property to each job object
	const positionsWithCheck = positions.map(pos => {
		return { ...pos, checked: false }
	})
	const handleAllPositionsCheck = (e: any) => {
		if (!allPositionsSelected) {
			const positionsChecked = positionsWithCheck.map(
				pos => {
					pos.checked = !e.target.checked
					return pos
				},
			)
			setPosition(positionsChecked.map(pos => pos._id!))
			setAllPositionsSelected(true)
		} else {
			setPosition([])
			setAllPositionsSelected(false)
		}
	}

	return (
		<div className="flex items-center h-1/5 border-b-2 border-[#DEE1E6] text-[#00ADEF] text-xl font-semibold py-8 select-none">
			<input
				type="checkbox"
				className="w-2/12 cursor-pointer"
			/>
			<div className="w-2/3 flex ">Candidate</div>
			<div className="w-1/3 flex ">Salary</div>
			<div className="w-1/3 flex ">Availability</div>
			<div className="w-1/3 flex justify-center">Media</div>
			<div className="w-1/3 flex ">English</div>
			<div className="w-1/3 flex ">Int. Skills</div>
			<div className="w-1/3 flex ">Skills</div>
			<div
				className="w-1/3  flex items-center cursor-pointer"
				onClick={() => setTogglePosition(!togglePosition)}
			>
				<span>Position</span>
				{togglePosition ? (
					<ArrowUp className="ml-[0.5em]" />
				) : (
					<ArrowDown className="ml-[0.5em]" />
				)}
			</div>

			{togglePosition && (
				<ul className="absolute right-[0.9em] top-[3.5em] z-10  bg-[#FFFFFF] drop-shadow-xl  w-60 h-15 pt-2 pl-4 pb-2 rounded">
					<li className=" flex flex-end items-center justify-center text-xs right-0 text-[#00ADEF]">
						<span className="w-4/6 text-[#475564] font-semibold"></span>
						<button
							onClick={handleAllPositionsCheck}
							className="w2/6 cursor-pointer text-sm text-cyan-500 font-raleway"
						>
							{allPositionsSelected &&
							_position.length !== 0
								? 'Unselect'
								: 'Select all'}
						</button>
					</li>

					{positions &&
						positions.map(position => {
							return (
								<li
									className="flex flex-end items-center border-b-2 pb-2 pt-2"
									key={position._id}
								>
									<span className="w-5/6 text-[#475564] text-base font-normal">
										{position.title}
									</span>
									<input
										type="checkbox"
										className="hover:cursor-pointer"
										name={position.title}
										id={position._id}
										checked={
											_position.indexOf(position._id!) !==
											-1
												? true
												: false
										}
										value={position._id!}
										onChange={handlePositionCheck}
									/>
								</li>
							)
						})}
					<li
						onClick={() =>
							setTogglePosition(!togglePosition)
						}
						className="font-semibold text-[#475564] text-base pt-4 pb-2 cursor-pointer hover:text-[#00ADEF]"
					>
						<Apply onClick={handleActionDispatch} />
					</li>
				</ul>
			)}
		</div>
	)
}

export default TableHeader
