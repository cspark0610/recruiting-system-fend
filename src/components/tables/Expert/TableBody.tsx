import {
	ICandidate,
	IPostulation,
} from '../../../redux/candidates/types/data'
import { calculateCandidateAge } from '../../../utils/candidates'
import { IoMail as EmailIcon } from 'react-icons/io5'
import { BsFillTelephoneFill as PhoneIcon } from 'react-icons/bs'
import { AiOutlineFilePdf as CVIcon } from 'react-icons/ai'
import { BsPlay as PlayIcon } from 'react-icons/bs'
// import { IoMicCircleOutline as AudioIcon } from "react-icons/io5";
// import { GiSoundWaves as RecordIcon } from "react-icons/gi";
import uuid from 'uuidv4'
import { useState } from 'react'
import { batch, useDispatch } from 'react-redux'
import {
	GetCandidateInfo,
	GetPostulationById,
} from '../../../redux/candidates/actions/CandidateAction'
import UserDialog from '../../dialog/UserDialog'
import { AppDispatch } from '../../../redux/store/store'

interface TableBodyProps {
	candidates: ICandidate[]
}

const TableBody = ({ candidates }: TableBodyProps) => {
	const dispatch = useDispatch<AppDispatch>()
	const [openDialog, setOpenDialog] =
		useState<boolean>(false)
	const [isModalLoading, setIsModalLoading] =
		useState<boolean>(false)
	const [shouldReload, setShouldReload] =
		useState<boolean>(true)
	const [hideButtons, setHideButtons] =
		useState<boolean>(false)
	const [shouldRenderDropdown, setShouldRenderDropdown] =
		useState<boolean>(true)

	const isOpen = (
		candidateId: string,
		postulationId: string,
	) => {
		batch(() => {
			dispatch(GetCandidateInfo(candidateId))
			dispatch(GetPostulationById(postulationId))
		})
		setOpenDialog(true)
		setIsModalLoading(true)
		setShouldReload(false)
		setHideButtons(true)
		setShouldRenderDropdown(false)
	}

	const isClose = () => {
		setOpenDialog(false)
	}

	const renderCandidateInfo = (
		candidate: ICandidate,
		postulation: IPostulation,
	) => {
		return (
			<div
				className="w-2/3 flex flex-col cursor-pointer"
				key={uuid()}
				onClick={() =>
					isOpen(candidate._id!, postulation._id!)
				}
			>
				<span>
					{candidate.name},{' '}
					<span className="font-semibold">
						{calculateCandidateAge(candidate.birth_date!)}{' '}
						years
					</span>
				</span>
				<div className="flex items-center">
					<EmailIcon className="text-[1.1em] text-[#00ADEF] mr-[0.5em] " />
					<span className="text-[.8em] ">
						{candidate.email}
					</span>
				</div>
				<div className="flex items-center">
					<PhoneIcon className="text-[0.8em] text-[#00ADEF] mr-[0.5em]" />
					<span className="text-[.8em]">
						{candidate.phone}
					</span>
				</div>
			</div>
		)
	}

	const renderCandidateSalaryByPostulation = (
		postulation: IPostulation,
	) => {
		return (
			<div className="w-1/3" key={uuid()}>
				{postulation.salary_expectations}
			</div>
		)
	}

	const renderCandidateAvalability = (
		candidate: ICandidate,
	) => {
		return (
			<div className="w-1/3" key={uuid()}>
				{candidate.available_from ?? 'No availability'}
			</div>
		)
	}

	const renderCandidateMedia = (candidate: ICandidate) => {
		return (
			<div
				className="w-1/3 flex flex-wrap h-full items-center justify-center"
				key={uuid()}
			>
				<a href={candidate.cv ?? '#'}>
					<CVIcon className="cursor-pointer text-green text-[2em] text-[#00ADEF] hover:opacity-25" />
				</a>
				<PlayIcon className="cursor-pointer text-[2.5em] text-[#00ADEF] hover:opacity-25" />
				{/* <AudioIcon className="cursor-pointer text-[2.5em] text-[#475564] hover:opacity-25" /> */}
			</div>
		)
	}

	const renderCandidateEnglishLvl = (
		candidate: ICandidate,
	) => {
		return (
			<div className="w-1/3 flex items-center" key={uuid()}>
				<div className="w-4 h-4 border-[#17E383] border-4 rounded-full cursor-pointer"></div>
				<span className="font-semibold text-[#17E383] text-[1.2em] ml-[0.5em]">
					{candidate.english_level}
				</span>
			</div>
		)
	}

	const renderCandidateInterviewSkills = (
		candidate: ICandidate,
	) => {
		return (
			<div className="w-1/3 flex flex-wrap" key={uuid()}>
				<span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
					clean
				</span>
				<span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
					charisma
				</span>
				{/* 
					<span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
						price/quality
					</span>
					<span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
						equity
					</span>
					<span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
						equity
					</span> 
				*/}
			</div>
		)
	}

	const renderCandidateSkillsByPostulation = (
		postulation: IPostulation,
	) => {
		return (
			<div className="w-1/3 flex flex-wrap" key={uuid()}>
				{postulation.skills &&
					postulation.skills.map((skill, i) => {
						return (
							<span
								className="border-[#00ADEF] bg-[#00ADEF] rounded-full px-1 mr-1 mb-1 text-xs text-[#fff] border-2 cursor-pointer"
								key={i}
							>
								{skill}
							</span>
						)
					})}
			</div>
		)
	}

	const renderCandidatePositionByPostulation = (
		postulation: IPostulation,
	) => {
		return (
			<div
				className="w-1/3 text-[#00ADEF] font-semibold"
				key={uuid()}
			>
				{postulation.position?.title ?? 'N/A'}
			</div>
		)
	}

	const renderCandidateTableRow = (
		candidates: ICandidate[],
	) => {
		return (
			candidates &&
			candidates.map(candidate => {
				return (
					candidate.postulations &&
					candidate.postulations.map(postulation => {
						return (
							<div
								className="flex items-center border-b-2 border-[#DEE1E6]  py-5 select-none"
								key={uuid()}
							>
								{openDialog && (
									<UserDialog
										isDialogClose={isClose}
										isModalLoading={isModalLoading}
										setIsModalLoading={setIsModalLoading}
										postulationId={postulation._id!}
										shouldReload={shouldReload}
										hideButtons={hideButtons}
										shouldRenderDropdown={
											shouldRenderDropdown
										}
									/>
								)}
								<input
									type="checkbox"
									className="w-2/12 cursor-pointer"
								/>
								{/* Candidate INFO */}
								{renderCandidateInfo(
									candidate,
									postulation,
								)}
								{/* Candidate Salary */}
								{renderCandidateSalaryByPostulation(
									postulation,
								)}
								{/* Candidate Availability */}
								{renderCandidateAvalability(candidate)}
								{/* Candidate Media */}
								{renderCandidateMedia(candidate)}
								{/* Candidate English lvl */}
								{renderCandidateEnglishLvl(candidate)}
								{/* Candidate Int Skills */}
								{renderCandidateInterviewSkills(candidate)}
								{/* Candidate Skills */}
								{renderCandidateSkillsByPostulation(
									postulation,
								)}
								{/* Candidate Position */}
								{renderCandidatePositionByPostulation(
									postulation,
								)}
							</div>
						)
					})
				)
			})
		)
	}

	return (
		<div className="h-4/5 overflow-y-auto scrollbar-hide">
			{/* Table Row */}
			{renderCandidateTableRow(candidates)}
		</div>
	)
}

export default TableBody
