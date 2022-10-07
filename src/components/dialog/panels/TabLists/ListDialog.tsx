import { useSelector } from 'react-redux'
import { Tab } from '@headlessui/react'
import DialogControl from '../../../buttons/DialogControl'
import { State } from '../../../../redux/store/store'
import { UseGetPostulationById } from '../../../../hooks/useGetPostulationById'

interface Props {
	isApproved: () => void
	isDoubting: () => void
	isDismiss: () => void
	isReject: () => void
	isHired: () => void
	isRecandidate: () => void
	isConfirmed: boolean
	postulationId: string
	shouldReload?: boolean
	hideButtons?: boolean
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const ListDialog = ({
	isApproved,
	isDoubting,
	isDismiss,
	isReject,
	isHired,
	isRecandidate,
	isConfirmed,
	postulationId,
	shouldReload,
	hideButtons,
}: Props) => {
	/* shouldReload === false, hideButtons === true */
	const detail = useSelector(
		(state: State) => state.info.detail,
	)
	const { postulation } = UseGetPostulationById(
		detail,
		postulationId,
	)
	const { main_status, secondary_status } = postulation
	const employment_status = detail.employment_status

	return (
		<Tab.List className="relative flex flex-col bg-light-gray-color w-[206px] h-screen">
			<div className="w-full my-5 text-center grid justify-center">
				<div className="w-[85px] h-[19px] py-[2px] font-raleway text-xs text-white bg-cyan-color rounded-[5px]">
					<span className="text-bold">Source: </span> FTF
				</div>
			</div>

			<Tab
				className={({ selected }) =>
					classNames(
						'absolute top-[87px] left-[45px] w-[191px] h-[41px] py-2.5 text-sm font-raleway font-medium text-left pl-5 text-gray-color focus:outline-none',
						selected
							? 'bg-white rounded-l-[5px] text-cyan-color'
							: '',
					)
				}
			>
				General details
			</Tab>

			<Tab
				className={({ selected }) =>
					classNames(
						`${
							detail.main_status === 'interested'
								? 'hidden'
								: 'block'
						} absolute top-[130px] left-[45px] w-[191px] h-[41px] py-2.5 text-sm font-raleway font-medium text-left pl-5 text-gray-color focus:outline-none`,
						selected
							? 'bg-white rounded-l-[5px] text-cyan-color'
							: '',
					)
				}
			>
				Videos
			</Tab>

			<Tab
				className={({ selected }) =>
					classNames(
						`absolute ${
							detail.main_status === 'interested'
								? 'top-[130px]'
								: 'top-[173px]'
						} left-[45px] w-[191px] h-[41px] py-2.5 text-sm font-raleway font-medium text-left pl-5 text-gray-color focus:outline-none`,
						selected
							? 'bg-white rounded-l-[5px] text-cyan-color'
							: '',
					)
				}
			>
				Conclusions
			</Tab>

			<div className="absolute top-[17rem] left-[1.0rem] bg-white p-3 rounded-lg">
				<span className="text-xs">
					Assigned Recruiters:
				</span>
				<ul className="ml-6 list-disc">
					{detail.designated_recruiters.map(
						(recruiter: string, index: number) => (
							<li key={index} className="text-xs">
								{recruiter}
							</li>
						),
					)}
				</ul>
			</div>

			{/* Buttons to control the postulation'status of a user */}
			<div
				className={`${
					isConfirmed ? 'hidden' : 'block'
				} absolute top-[370px] left-[40px]`}
			>
				<div className="grid grid-cols-1">
					{/*  */}
					{shouldReload === false &&
						hideButtons &&
						(employment_status === 'former' ||
							employment_status === 'in_process') && (
							<DialogControl
								classes="bg-cyan-color"
								onClick={isRecandidate}
								title="Recandidate"
								needIcon={false}
							/>
						)}
					{shouldReload === false &&
						hideButtons &&
						employment_status === 'active' && (
							<DialogControl
								classes="bg-red-dark"
								onClick={isDismiss}
								title="Dismiss"
								needIcon={false}
							/>
						)}

					{main_status === 'chosen' && !hideButtons ? (
						<>
							<DialogControl
								classes="bg-[#35C549]"
								onClick={isHired}
								title="Hire"
								needIcon={false}
							/>
							<DialogControl
								classes="bg-red-dark"
								onClick={isDismiss}
								title="Dismiss"
								needIcon={false}
							/>
						</>
					) : (
						<>
							{secondary_status !== 'dismissed' &&
								!hideButtons && (
									<DialogControl
										classes="bg-green-color"
										onClick={isApproved}
										title="Approve"
										needIcon={false}
									/>
								)}
							{secondary_status !== 'dismissed' &&
								!hideButtons && (
									<DialogControl
										classes="bg-yellow-color"
										onClick={isDoubting}
										title="Doubting"
										needIcon={false}
									/>
								)}
							{secondary_status !== 'dismissed' &&
								!hideButtons && (
									<DialogControl
										classes="bg-red-dark"
										onClick={isDismiss}
										title="Dismiss"
										needIcon={false}
									/>
								)}
							<DialogControl
								classes="bg-transparent !text-gray-color"
								onClick={isReject}
								title="Reject"
								needIcon={true}
							/>
						</>
					)}
				</div>
			</div>
		</Tab.List>
	)
}

export default ListDialog
