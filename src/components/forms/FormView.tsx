import { createBrowserHistory } from 'history'
import { useState } from 'react'
import {
	AiOutlineUp as ArrowUp,
	AiOutlineDown as ArrowDown,
} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { GetCandidatesFilteredExpert } from '../../redux/candidates/actions/CandidateAction'
import { AppDispatch } from '../../redux/store/store'
import {
	EMPLOYMENT_STATUS,
	EMPLOYMENT_STATUS_ALLOWED,
} from '../../utils/candidates'
import Apply from '../buttons/Apply'

interface Props {
	toggleStatus: boolean
	setToggleStatus: any
}

const FormView = ({
	toggleStatus,
	setToggleStatus,
}: Props) => {
	const history = createBrowserHistory()
	const dispatch = useDispatch<AppDispatch>()
	const [name, setName] = useState<string>('')
	const [basicSkill, setBasicSkill] = useState<string>('')
	const [intermediateSkill, setIntermediateSkill] =
		useState<string>('')
	const [advancedSkill, setAdvancedSkill] =
		useState<string>('')
	const [skills, setSkills] = useState<string[]>([''])
	const [employment_status, setEmploymentStatus] = useState<
		string[]
	>([''])

	const handleName = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setName(e.target.value)
	}

	const handleBasicSkill = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setBasicSkill(e.target.value)
		setSkills([...skills, e.target.value])
	}

	const handleIntermediateSkill = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setIntermediateSkill(e.target.value)
		setSkills([...skills, e.target.value])
	}

	const handleAdvancedSkill = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setAdvancedSkill(e.target.value)
		setSkills([...skills, e.target.value])
	}

	const handleClickFirstApply = () => {
		handleActionDispatchFirstApply()

		setBasicSkill('')
		setIntermediateSkill('')
		setAdvancedSkill('')
		setSkills([''])
	}

	const handleClickSecondApply = () => {
		handleActionDispatchSecondApply()
		setName('')
		setEmploymentStatus([''])
	}

	const handleEmploymentStatusCheck = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (e.target.checked) {
			setEmploymentStatus([
				...employment_status,
				e.target.value,
			])
		} else {
			setEmploymentStatus([
				...employment_status.filter(
					status => status !== e.target.value,
				),
			])
		}
	}

	const handleActionDispatchFirstApply = () => {
		if (!skills.length) return
		dispatch(
			GetCandidatesFilteredExpert({
				skills: skills.filter(i => i !== ''),
				candidate_name: '',
				employment_status: [],
			}),
		)
	}

	const handleActionDispatchSecondApply = () => {
		if (name === '' && !employment_status.length) return
		dispatch(
			GetCandidatesFilteredExpert({
				skills: [],
				candidate_name: name.trim(),
				employment_status: employment_status.filter(
					i => i !== '',
				),
			}),
		)
	}
	const renderStatus = (status: string) => {
		if (status === 'active')
			return EMPLOYMENT_STATUS_ALLOWED[0]
		if (status === 'former')
			return EMPLOYMENT_STATUS_ALLOWED[1]
		if (status === 'in_process')
			return EMPLOYMENT_STATUS_ALLOWED[2]
	}
	const renderClassnameStatus = (status: string) => {
		if (status === 'active')
			return 'text-[#00ADEF] font-semibold'
		if (status === 'former')
			return 'text-[#475564] font-semibold'
		if (status === 'in_process')
			return 'text-[#475564] font-normal'
	}

	const handleCleanFilters = () => {
		history.go(0)
	}

	return (
		<div className="flex flex-col mx-20 border-2 rounded-3xl">
			<div className="mx-8 mb-8">
				<h2 className="text-xl text-[#475564] font-bold mt-32 mb-4">
					Candidate Records
				</h2>

				<div className="flex">
					<div className="flex flex-col w-11/12">
						<div className="flex mb-2 h-20 space-x-8 ">
							<div className="flex flex-col w-2/6 relative">
								<div className="h-1/3 text-[#475564] mb-1">
									Search by skills
								</div>
								<span className="absolute mt-9 mx-5 text-xs text-[#475564]">
									Advanced:
								</span>
								<input
									className="bg-light-color w-full h-16 px-5 pt-3.5 border-none rounded-2xl outline-none focus:shadow-lg focus:shadow-[#C3EBFB]"
									placeholder="Skill"
									type="text"
									id="advancedSkill"
									name="advancedSkill"
									value={advancedSkill}
									onChange={handleAdvancedSkill}
								/>
							</div>
							<div className="flex flex-col w-2/6 relative">
								<div className="h-1/3 text-[#475564] mb-1"></div>
								<span className="absolute mt-9 mx-5 text-xs text-[#475564]">
									Intermediate:
								</span>
								<input
									className="bg-light-color w-full h-16 px-5 pt-3.5 border-none rounded-2xl outline-none focus:shadow-lg focus:shadow-[#C3EBFB]"
									placeholder="Skill"
									type="text"
									id="intermediateSkill"
									name="intermediateSkill"
									value={intermediateSkill}
									onChange={handleIntermediateSkill}
								/>
							</div>
							<div className="flex flex-col w-2/6 relative">
								<div className="h-1/3 text-[#475564] mb-1"></div>
								<span className="absolute mt-9 mx-5 text-xs text-[#475564]">
									Basic:
								</span>
								<input
									className="bg-light-color w-full h-16 px-5 pt-3.5 border-none rounded-2xl outline-none focus:shadow-lg focus:shadow-[#C3EBFB]"
									placeholder="Skill"
									type="text"
									id="basicSkill"
									name="basicSkill"
									value={basicSkill}
									onChange={handleBasicSkill}
								/>
							</div>
						</div>

						<div className="flex h-20 space-x-8">
							<div className="flex flex-col w-2/6 relative">
								<div className="h-1/3 text-[#475564] mb-1">
									Search by Name:
								</div>
								<span className="absolute mt-9 mx-5 text-xs text-[#475564]"></span>
								<input
									className="bg-light-color w-full h-16 px-5 pt-3.5 border-none rounded-2xl outline-none focus:shadow-lg focus:shadow-[#C3EBFB]"
									placeholder="Name"
									type="text"
									id="name"
									name="name"
									value={name}
									onChange={handleName}
								/>
							</div>

							<div className="w-2/6 mt-8 flex  items-center  select-none relative">
								{toggleStatus && (
									<ul className="absolute z-10  bg-[#FFFFFF] drop-shadow-xl  w-60 h-15 mt-80 pt-2 pl-4 pb-2 rounded">
										<li className=" flex flex-end items-center justify-center text-xs right-0 text-[#00ADEF]">
											<span className="w-4/6 text-[#475564] font-semibold"></span>
											<span className=" w2/6 cursor-pointer">
												Select all
											</span>
										</li>

										{EMPLOYMENT_STATUS.map(
											(status: string) => {
												return (
													<li
														className="flex flex-end items-center border-b-2 pb-2 pt-2"
														key={status}
													>
														<span
															className={`w-5/6 ${renderClassnameStatus(
																status,
															)}`}
														>
															{renderStatus(status)}
														</span>
														<input
															className="hover:cursor-pointer"
															type="checkbox"
															name={status}
															id={status}
															value={status}
															checked={
																employment_status.indexOf(
																	status,
																) !== -1
																	? true
																	: false
															}
															onChange={
																handleEmploymentStatusCheck
															}
														/>
													</li>
												)
											},
										)}

										<li
											onClick={() =>
												setToggleStatus(!toggleStatus)
											}
											className="font-semibold pt-4 pb-2 cursor-pointer hover:text-[#00ADEF]"
										>
											<Apply
												onClick={handleClickSecondApply}
											/>
										</li>
									</ul>
								)}

								<div
									className="flex space-x-4 mr-6 items-center cursor-pointer"
									onClick={() =>
										setToggleStatus(!toggleStatus)
									}
								>
									<span>Status</span>
									{toggleStatus ? (
										<ArrowUp />
									) : (
										<ArrowDown />
									)}
								</div>

								<div className="text-[#50C7F4] cursor-pointer select-none">
									<button onClick={handleCleanFilters}>
										Clean filters
									</button>
								</div>
							</div>
							<div className="w-2/6 ">
								<span className="h-1/3"></span>
							</div>
						</div>
					</div>

					<div className="flex flex-col w-1/12 select-none">
						<div className="flex items-center pt-6 justify-center h-20 text-[#00ADEF] font-bold cursor-pointer">
							<button
								className="text-[#00ADEF] font-bold cursor-pointer"
								onClick={handleClickFirstApply}
							>
								Apply
							</button>
						</div>
						<div className="flex items-center justify-center h-20"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormView
