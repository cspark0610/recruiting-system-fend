import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	ClearCandidateDetail,
	GenerateUrl,
	RejectCandidate,
	UpdateCandidateStatus,
} from "../../redux/candidates/actions/CandidateAction";
import { State } from "../../redux/store/store";
import Panels from "./panels/Panels";
import HeaderDialog from "../header/HeaderDialog";
import Modal from "../extras/Modal";
import LoaderSpinner from "../../assets/loaderSpinner";
import { ICandidate, IPostulation } from "../../redux/candidates/types/data";

interface Props {
	isDialogClose: any;
	isModalLoading: boolean;
	setIsModalLoading: any;
	postulationId: string;
}

const UserDialog: React.FC<Props> = ({
	isDialogClose,
	isModalLoading,
	setIsModalLoading,
	postulationId,
}) => {
	const dispatch = useDispatch();
	const isDetailFinishedLoading = useSelector((state: State) => state.info.detailFinishedLoading);
	const detail: ICandidate = useSelector((state: State) => state.info.detail);

	const success = useSelector((state: State) => state.info.success);

	/* STATES OF CONTROL FROM BUTTONS */
	const [approve, setApproved] = useState(false);
	const [doubting, setDoubting] = useState(false);
	const [dismiss, setDismiss] = useState(false);
	const [reject, setReject] = useState(false);

	/* STATES OF CONTROL FROM HEADER DIALOG */
	const [color, setColor] = useState("bg-gray-color");

	/* STATES OF CONTROL FROM MODAL */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isConfirm] = useState(false);

	useEffect(() => {
		if (approve && isConfirm) {
			setColor("bg-green-color");
			setApproved(false);
		} else {
			if (doubting && isConfirm) {
				setColor("bg-yellow-color");
				setDoubting(false);
			} else {
				if (dismiss && isConfirm) {
					setColor("bg-red-dark");
					setDismiss(false);
				} else {
					if (reject && isConfirm) {
						setColor(color);
						setReject(false);
					}
				}
			}
		}
	}, [approve, doubting, dismiss, reject, isConfirm, color, dispatch]);

	// stops the loading spinner when details finished loading
	useEffect(() => {
		if (isDetailFinishedLoading) {
			setIsModalLoading(false);
		}
	}, [isDetailFinishedLoading, setIsModalLoading]);

	// closes the action modal when an action is dispatched successfully
	useEffect(() => {
		if (success.message !== "" && approve) {
			setApproved(false);
		} else if (success.message !== "" && doubting) {
			setDoubting(false);
		} else if (success.message !== "" && dismiss) {
			setDismiss(false);
		} else {
			if (success.message !== "" && reject) {
				setReject(false);
			}
		}
	}, [success, approve, doubting, dismiss, reject]);

	// clears the candidate detail when the modal is closed
	useEffect(() => {
		return () => {
			dispatch(ClearCandidateDetail(dispatch));
		};
	}, [dispatch]);

	const isApproved = () => {
		setApproved(!approve);
	};

	const isDoubting = () => {
		setDoubting(!doubting);
	};

	const isDismiss = () => {
		setDismiss(!dismiss);
	};

	const isReject = () => {
		setReject(!reject);
	};

	const isStatusConfirm = (secondary_status: string, postulationId: string) => {
		let main_status = "";
		detail.postulations!.forEach((p: IPostulation) => {
			if (p._id === postulationId) {
				main_status += p.main_status;
			}
		});
		//caso de 'rejected'
		if (secondary_status === "rejected") {
			dispatch(RejectCandidate(detail._id!));
		}

		if (secondary_status !== "approved") {
			dispatch(UpdateCandidateStatus(postulationId, main_status, secondary_status));
		}

		if (main_status === "interested" && secondary_status) {
			dispatch(GenerateUrl(postulationId));
			dispatch(UpdateCandidateStatus(postulationId, "applying", secondary_status));
		}
		if (main_status === "applying" && secondary_status) {
			dispatch(UpdateCandidateStatus(postulationId, "meeting", secondary_status));
		}
		if (main_status === "meeting" && secondary_status) {
			dispatch(UpdateCandidateStatus(postulationId, "chosen", secondary_status));
		}
	};

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
										<LoaderSpinner height="h-14" width="w-12" classes="mt-48" />
									</div>
								</div>
							) : null}
							<HeaderDialog isClose={isDialogClose} color={color} />
							<div className="flex">
								<Panels
									isApproved={isApproved}
									isDoubting={isDoubting}
									isDismiss={isDismiss}
									isReject={isReject}
									isConfirmed={isConfirm}
									postulationId={postulationId}
								/>
							</div>
							{/* Modals to confirm an action */}
							{approve && (
								<Modal
									alt="approve"
									classes={true}
									image="approve"
									isVerify={() => isStatusConfirm("approved", postulationId)}
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
									isVerify={() => isStatusConfirm("doubting", postulationId)}
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
									isVerify={() => isStatusConfirm("dismissed", postulationId)}
									message="Remember to fill your motives for this decition in conclusions"
									onClick={isDismiss}
									setValue={setDismiss}
									status="dismissed."
									title="This candidate has been "
									value={dismiss}
								/>
							)}
							{reject && (
								<Modal
									alt="reject"
									classes={false}
									image="reject"
									isVerify={() => isStatusConfirm("rejected", postulationId)}
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
	);
};

export default UserDialog;
