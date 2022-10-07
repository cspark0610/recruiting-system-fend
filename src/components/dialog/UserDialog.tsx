import { useEffect, useState } from 'react'
import {
	useDispatch,
	useSelector,
	batch,
} from 'react-redux'
import { createBrowserHistory } from 'history'
import {
	ClearCandidateDetail,
	GenerateUrl,
	RejectCandidate,
	UpdateCandidateEmploymentStatus,
	UpdateCandidateStatus,
} from '../../redux/candidates/actions/CandidateAction'
import { AppDispatch, State } from '../../redux/store/store'
import Panels from './panels/Panels'
import HeaderDialog from '../header/HeaderDialog'
import Modal from '../extras/Modal'
import LoaderSpinner from '../../assets/loaderSpinner'
import {
	ICandidate,
	IPostulation,
} from '../../redux/candidates/types/data'
import { MAIN_STATUS_ALLOWED } from '../../utils/candidates'

interface Props {
	isDialogClose: any
	isModalLoading: boolean
	setIsModalLoading: any
	postulationId: string
	shouldReload?: boolean
	hideButtons?: boolean
	shouldRenderDropdown?: boolean
}

const UserDialog: React.FC<Props> = ({
	isDialogClose,
	isModalLoading,
	setIsModalLoading,
	postulationId,
	shouldReload,
	hideButtons,
	shouldRenderDropdown,
}) => {
	const history = createBrowserHistory()
	const dispatch = useDispatch<AppDispatch>()
	const isDetailFinishedLoading = useSelector(
		(state: State) => state.info.detailFinishedLoading,
	)
	const detail: ICandidate = useSelector(
		(state: State) => state.info.detail,
	)

	const success = useSelector(
		(state: State) => state.info.success,
	)

	let main_status = ''
	detail.postulations!.forEach((p: IPostulation) => {
		if (p._id === postulationId) {
			main_status += p.main_status
		}
	})

	/* STATES OF CONTROL FROM BUTTONS */
	const [approve, setApproved] = useState(false)
	const [doubting, setDoubting] = useState(false)
	const [dismiss, setDismiss] = useState(false)
	const [recandidate, setRecandidate] = useState(false)
	const [reject, setReject] = useState(false)
	const [hired, setHired] = useState(false)

	/* STATES OF CONTROL FROM HEADER DIALOG */
	const [color, setColor] = useState('bg-gray-color')

	/* STATES OF CONTROL FROM MODAL */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isConfirm] = useState(false)

	useEffect(() => {
		if (approve && isConfirm) {
			setColor('bg-green-color')
			setApproved(false)
		} else {
			if (doubting && isConfirm) {
				setColor('bg-yellow-color')
				setDoubting(false)
			} else {
				if (dismiss && isConfirm) {
					setColor('bg-red-dark')
					setDismiss(false)
				} else {
					if (reject && isConfirm) {
						setColor(color)
						setReject(false)
					}
				}
			}
		}
	}, [
		approve,
		doubting,
		dismiss,
		reject,
		isConfirm,
		color,
		dispatch,
	])

	// stops the loading spinner when details finished loading
	useEffect(() => {
		if (isDetailFinishedLoading) {
			setIsModalLoading(false)
		}
	}, [isDetailFinishedLoading, setIsModalLoading])

	// closes the action modal when an action is dispatched successfully
	useEffect(() => {
		if (success.message !== '' && approve) {
			setApproved(false)
		}
		if (success.message !== '' && doubting) {
			setDoubting(false)
		}
		if (success.message !== '' && dismiss) {
			setDismiss(false)
		}
		if (success.message !== '' && reject) {
			setReject(false)
		}
		if (success.message !== '' && hired) {
			setHired(false)
		}
		if (success.message !== '' && recandidate) {
			setRecandidate(false)
		}
	}, [
		success,
		approve,
		doubting,
		dismiss,
		reject,
		hired,
		recandidate,
	])

	// clears the candidate detail when the modal is closed
	useEffect(() => {
		return () => {
			if (shouldReload) {
				dispatch(ClearCandidateDetail(dispatch))
				history.go(0)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch])

	const isApproved = () => setApproved(!approve)
	const isDoubting = () => setDoubting(!doubting)
	const isDismiss = () => setDismiss(!dismiss)
	const isRecandidate = () => setRecandidate(!recandidate)
	const isReject = () => setReject(!reject)
	const isHired = () => setHired(!hired)

	const isStatusConfirm = (
		secondary_status: string,
		postulationId: string,
		shouldRecandidate: boolean,
	) => {
		// recandidate case
		if (
			shouldRecandidate === true &&
			secondary_status === 'new entry'
		) {
			dispatch(
				UpdateCandidateStatus(
					postulationId,
					'interested',
					'new entry',
				),
			)
		}

		if (secondary_status === 'rejected') {
			dispatch(RejectCandidate(detail._id!))
		}

		if (
			main_status === 'interested' &&
			secondary_status === 'new entry'
		) {
			batch(() => {
				dispatch(GenerateUrl(postulationId))
				dispatch(
					UpdateCandidateStatus(
						postulationId,
						'applying',
						'new entry',
					),
				)
			})
		}

		if (
			main_status === 'applying' &&
			secondary_status === 'new entry'
		) {
			dispatch(
				UpdateCandidateStatus(
					postulationId,
					'meeting',
					'new entry',
				),
			)
		}

		if (
			main_status === 'meeting' &&
			secondary_status === 'new entry'
		) {
			dispatch(
				UpdateCandidateStatus(
					postulationId,
					'chosen',
					'new entry',
				),
			)
		}

		if (
			main_status === 'chosen' &&
			secondary_status === 'new entry'
		) {
			batch(() => {
				dispatch(
					UpdateCandidateStatus(
						postulationId,
						'hired',
						'approved',
					),
				)
				dispatch(
					UpdateCandidateEmploymentStatus(
						detail._id!,
						'active',
					),
				)
			})
		}

		if (
			MAIN_STATUS_ALLOWED.includes(main_status) &&
			secondary_status === 'doubting'
		) {
			dispatch(
				UpdateCandidateStatus(
					postulationId,
					main_status,
					'doubting',
				),
			)
		}

		if (
			MAIN_STATUS_ALLOWED.includes(main_status) &&
			secondary_status === 'dismissed'
		) {
			dispatch(
				UpdateCandidateStatus(
					postulationId,
					main_status,
					'dismissed',
				),
			)
		}
	}

	return (
		<>
			<div className="fixed z-10 inset-0 overflow-y-auto">
				<div className="flex items-center justify-center min-h-screen text-center p-0">
					<div className="fixed inset-0 bg-white bg-opacity-75 transition-opacity"></div>
					<div className="relative inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-[77.313rem] h-[40rem]">
						<div className="bg-white relative">
							{isModalLoading ? (
								<div className="absolute z-10 bg-white h-full w-full bg-opacity-75">
									<div className="flex items-center justify-center">
										<LoaderSpinner
											height="h-14"
											width="w-12"
											classes="mt-48"
										/>
									</div>
								</div>
							) : null}
							<HeaderDialog
								isClose={isDialogClose}
								color={color}
								postulationId={postulationId}
								shouldRenderDropdown={shouldRenderDropdown}
							/>
							<div className="flex">
								<Panels
									isApproved={isApproved}
									isDoubting={isDoubting}
									isDismiss={isDismiss}
									isReject={isReject}
									isHired={isHired}
									isRecandidate={isRecandidate}
									isConfirmed={isConfirm}
									postulationId={postulationId}
									shouldReload={shouldReload}
									hideButtons={hideButtons}
								/>
							</div>
							{/* Modals to confirm an action */}
							{approve && (
								<Modal
									alt="approve"
									classes={true}
									image="approve"
									isVerify={isStatusConfirm(
										'new entry',
										postulationId,
										false,
									)}
									message="An automatic email is going to be send to this candidate with instructions for next step."
									onClick={isApproved}
									setValue={setApproved}
									status="You`ve approved this Candidate!"
									value={approve}
								/>
							)}
							{doubting && (
								<Modal
									alt="doubting"
									classes={true}
									image="doubting"
									isVerify={isStatusConfirm(
										'doubting',
										postulationId,
										false,
									)}
									onClick={isDoubting}
									setValue={setDoubting}
									status='"in doubt".'
									title="Your candidate has been marked as "
									value={doubting}
								/>
							)}
							{dismiss && (
								<Modal
									alt="dismiss"
									classes={true}
									image="dismiss"
									isVerify={isStatusConfirm(
										'dismissed',
										postulationId,
										false,
									)}
									message="Remember to fill your motives for this desition in conclusions"
									onClick={isDismiss}
									setValue={setDismiss}
									status="dismissed."
									title="This candidate has been "
									value={dismiss}
								/>
							)}
							{hired && (
								<Modal
									alt="hired"
									classes={true}
									image="hired"
									isVerify={isStatusConfirm(
										'new entry',
										postulationId,
										false,
									)}
									message="Remember to fill your motives for this desition in conclusions"
									onClick={isHired}
									setValue={setHired}
									status="hired."
									title="This candidate has been "
									value={hired}
								/>
							)}
							{recandidate && (
								<Modal
									alt="recandidate"
									classes={true}
									image="recandidate"
									isVerify={isStatusConfirm(
										'new entry',
										postulationId,
										true,
									)}
									message="Remember to fill your motives for this desition in conclusions"
									onClick={isRecandidate}
									setValue={setRecandidate}
									status="recandidated."
									title="This candidate has been "
									value={recandidate}
								/>
							)}
							{reject && (
								<Modal
									alt="reject"
									classes={false}
									image="reject"
									isVerify={isStatusConfirm(
										'rejected',
										postulationId,
										false,
									)}
									message="This candidate won’t be able to apply for any position ever again. Please, explain your decition here:"
									onClick={isReject}
									setValue={setReject}
									value={reject}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserDialog
