import '../../assets/scss/inputs.scss'

import {
	UpdateInfo,
	createPosition,
} from '../../redux/positions/actions/PositionsActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'

import ErrorMessages from './ErrorMessages'
import LoaderSpinner from '../../assets/loaderSpinner'
import MultiSelect from 'multiselect-react-dropdown'
import { AppDispatch, State } from '../../redux/store/store'
import Text from '../inputs/Text'
import { VIEW_OPEN_POSITIONS } from '../../config/routes/paths'
import priorities from '../../config/positions/constants'
import { useNavigate } from 'react-router-dom'

type OptionValues = {
	id: string
	name: string
}

type FrmPositionProps = {
	_id?: string
}

export default function FrmPosition({
	_id,
}: FrmPositionProps) {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const users = useSelector(
		(state: State) => state.user.users,
	)
	const loading = useSelector(
		(state: State) => state.positions.loading,
	)
	const updating = useSelector(
		(state: State) => state.positions.updating,
	)
	const success = useSelector(
		(state: State) => state.positions.success,
	)
	const error = useSelector(
		(state: State) => state.positions.error,
	)

	const multiselectRef = useRef<MultiSelect>(null)

	const data: OptionValues[] = users.reduce(
		(prev: any, user: any) => {
			return [...prev, { id: user._id, name: user.name }]
		},
		[],
	)

	const positionInfo = useSelector(
		(state: State) => state.positions.info,
	)

	const currentRecruiters =
		positionInfo?.designated?.reduce(
			(prev: any, user: any) => {
				return [...prev, { id: user._id, name: user.name }]
			},
			[],
		)

	const prioritiesWithoutCurrent = _id
		? priorities.filter(
				(priority) =>
					priority.name !== positionInfo.priority,
		  )
		: priorities

	const [title, setTitle] = useState('')
	const [clientName, setClientName] = useState('')
	const [rieLink, setRieLink] = useState('')
	const [recruiterGuide, setRecruiterGuide] = useState('')
	const [designated_recruiters, setDesignated_recruiters] =
		useState<Array<OptionValues>>([])

	const [selectedPriority, setSelectedPriority] =
		useState('')

	/* Regular Expressions */
	const RegExp = {
		general: /^\s*/,
		characters: /[0-9]/g,
		numbers: /\D/g,
	}

	const handleSubmit = (
		e: React.FormEvent<HTMLButtonElement>,
	) => {
		e.preventDefault()

		const recruitersName = designated_recruiters.map(
			(recruiter) => recruiter.name,
		)

		if (!_id) {
			dispatch(
				createPosition({
					title,
					client_name: clientName,
					rie_link: rieLink,
					recruiter_filter: recruiterGuide,
					priority: selectedPriority,
					designated: recruitersName,
				}),
			)
		} else {
			dispatch(
				UpdateInfo(_id, {
					title,
					client_name: clientName,
					rie_link: rieLink,
					recruiter_filter: recruiterGuide,
					priority: selectedPriority,
					designated: recruitersName,
				}),
			)
		}
	}

	useEffect(() => {
		if (success.message !== '') {
			navigate(VIEW_OPEN_POSITIONS)
		}
	}, [success.message, navigate])

	useEffect(() => {
		if (_id) {
			setTitle(positionInfo?.title!)
			setClientName(positionInfo?.client_name!)
			setRieLink(positionInfo?.rie_link!)
			setRecruiterGuide(positionInfo?.recruiter_filter!)
			setDesignated_recruiters(currentRecruiters!)
			setSelectedPriority(positionInfo?.priority!)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [positionInfo, _id])

	return (
		<div className="flex justify-center max-w-[913px] w-[90%] mx-auto">
			<section className="flex flex-col w-full p-2 ">
				<div className="pb-4">
					<div className=" pb-2">
						<span className="font-raleway font-medium text-[#475564]">
							Select Priority:
						</span>
					</div>
					<div className="flex space-x-3">
						{prioritiesWithoutCurrent.map((priority) => (
							<div
								key={priority.id}
								className="flex items-center"
							>
								<label
									className="hover:cursor-pointer font-raleway text-[#475564] text-lg flex items-center "
									htmlFor={priority.id.toString()}
								>
									<input
										type="checkbox"
										name={priority.name}
										className="custom__checkbox"
										id={priority.id.toString()}
										value={priority.name}
										onChange={(e) =>
											setSelectedPriority(e.target.value)
										}
										checked={
											selectedPriority === priority.name
												? true
												: false
										}
									/>
									<span className="check-visual"></span>
									{priority.displayName}
								</label>
							</div>
						))}
						<ErrorMessages
							errorTerms={['priority']}
							errorState={error}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<ErrorMessages
						errorTerms={['registered']}
						errorState={error}
						className="flex justify-center pb-2"
					/>
					<div className="flex justify-center">
						<div className="w-[50%]">
							<Text
								id="name"
								label="Name"
								name="name"
								placeholder="Position Name"
								RegExp={RegExp.characters}
								setValue={setTitle}
								showAlert={false}
								type="text"
								value={title}
								width="w-full pl-0"
							/>
							<ErrorMessages
								errorTerms={['Position']}
								errorState={error}
								className="flex flex-col ml-4"
							/>
						</div>
						<div className="w-[50%]">
							<Text
								id="clientName"
								label="Client"
								name="clientName"
								placeholder="Client Name"
								RegExp={RegExp.characters}
								setValue={setClientName}
								showAlert={false}
								type="text"
								value={clientName}
								width="w-full pr-0"
							/>
							<ErrorMessages
								errorTerms={['Client']}
								errorState={error}
								className="flex flex-col ml-4"
							/>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="w-[50%]">
							<Text
								id="rieLink"
								label="RIE Link"
								name="rieLink"
								placeholder="RIE Link"
								RegExp={RegExp.characters}
								setValue={setRieLink}
								showAlert={false}
								type="url"
								value={rieLink}
								width="w-full pl-0"
							/>
							<ErrorMessages
								errorTerms={['RIE', 'rie_link']}
								errorState={error}
								className="flex flex-col ml-4"
							/>
						</div>
						<div className="w-[50%]">
							<Text
								id="recruiterGuide"
								label="Recruiter Guide"
								name="recruiterGuide"
								placeholder="Recruiter Filter Link"
								RegExp={RegExp.characters}
								setValue={setRecruiterGuide}
								showAlert={false}
								type="url"
								value={recruiterGuide}
								width="w-full pr-0"
							/>
							<ErrorMessages
								errorTerms={[
									'Recruiter',
									'recruiter_filter',
								]}
								errorState={error}
								className="flex flex-col ml-4"
							/>
						</div>
					</div>{' '}
					<div className="mt-2 mx-auto w-full">
						<div className="flex flex-col ">
							<MultiSelect
								options={data}
								className="z-20 hover:cursor-pointer pb-2 font-raleway"
								placeholder="Designated Recruiter"
								hidePlaceholder={true}
								avoidHighlightFirstOption={true}
								displayValue="name"
								ref={multiselectRef}
								onSelect={setDesignated_recruiters}
								onRemove={setDesignated_recruiters}
								selectedValues={designated_recruiters}
							/>
							<ErrorMessages
								errorTerms={['designate']}
								errorState={error}
								className="flex flex-col ml-1"
							/>
						</div>
					</div>
				</div>

				<div className="mt-10 flex justify-center space-x-6">
					{_id ? (
						<button
							className="flex items-center justify-center cursor-pointer border-2 border-cyan-color hover:bg-slate-100 rounded-2xl bg-white text-cyan-color font-bold font-raleway mobile:py-2 mobile:h-[59px] mobile:w-[106px] laptop:h-[59px] laptop:w-[106px] focus:outline-none"
							onClick={() => navigate(VIEW_OPEN_POSITIONS)}
						>
							Cancel
						</button>
					) : null}
					<button
						type="button"
						onClick={handleSubmit}
						disabled={loading || updating}
						className="flex items-center justify-center cursor-pointer rounded-2xl bg-cyan-color shadow-cyan-color/50 hover:bg-cyan-color/80 shadow-lg text-white font-semibold font-raleway mobile:py-2 mobile:h-[59px] mobile:w-[106px] laptop:h-[59px] laptop:w-[106px] focus:outline-none"
					>
						{loading || updating ? (
							<LoaderSpinner
								width="w-7"
								height="h-7"
								stroke="white"
								fill="white"
							/>
						) : _id ? (
							'Save'
						) : (
							'Create'
						)}
					</button>
				</div>
			</section>
		</div>
	)
}
