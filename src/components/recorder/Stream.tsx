import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdRestartAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { State } from "../../redux/store/store";
import { VIEW_VIDEO_COMPLETED } from "../../config/routes/paths";
import CameraOn from "./CameraOn";
import Stop from "./control/Stop";
import { useCounter } from "../../hooks/useCounter";
import { UseCamera } from "../../hooks/useCamera";
import ProgressVideoBar from "../extras/ProgressVideoBar";
import Recording from "../extras/Recording";
import { SendVideo } from "../../redux/candidates/actions/CandidateAction";
import { IPostulation } from "../../redux/candidates/types/data";

type StreamProps = {
	videoCounter: number;
	setVideoCounter: (value: number) => void;
	token: string;
	postulation: IPostulation;
};

const Stream: React.FC<StreamProps> = ({ videoCounter, setVideoCounter, token, postulation }) => {
	/*  */
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [capture, setCapture] = useState(false);
	const [isStopped, setIsStopped] = useState(false);

	const currentCandidate = useSelector((state: State) => state.info.detail);
	const postulationId = postulation._id;

	const {
		position: { videos_question_list },
	} = currentCandidate;

	const { time, startTimer, stopTimer, resetTimer, progress } = useCounter();
	const { isCameraOn, init } = UseCamera();

	const webcamRef = useRef<any>(null);
	const mediaRecorderRef = useRef<any>(null);
	const videoChunks = useRef<any>([]);

	/* START RECORDING */
	const handleStartCaptureClick = useCallback(() => {
		setCapture(true);
		startTimer();
		mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
			mimeType: "video/webm",
		});

		mediaRecorderRef.current.start();

		mediaRecorderRef.current.ondataavailable = (e: any) => {
			if (videoChunks.current) {
				videoChunks.current.push(e.data);
			}
		};
	}, [mediaRecorderRef, webcamRef, setCapture, startTimer]);

	/* STOP RECORDING */
	const handleStopCaptureClick = useCallback(() => {
		setCapture(false);
		setIsStopped(true);
		setTimeout(() => stopTimer(), 500);
		mediaRecorderRef.current.stop();
	}, [mediaRecorderRef, setCapture, stopTimer]);

	/* REMAKE RECORDING */
	const handleRemakeCaptureClick = useCallback(() => {
		if (videoChunks.current) {
			setIsStopped(false);
			videoChunks.current = [];
			setTimeout(() => {
				resetTimer();
				handleStartCaptureClick();
			}, 500);
		}
	}, [handleStartCaptureClick, resetTimer]);

	const handleSubmitCapture = useCallback(() => {
		if (videoChunks.current) {
			setTimeout(() => {
				const blob = new Blob(videoChunks.current, {
					type: "video/mp4",
				});

				// aca
				const currentCandidateQuestionsLength = videos_question_list.length;

				const video_url = URL.createObjectURL(blob);
				const formData = new FormData();

				formData.append("video_recording_url", video_url);

				if (videoCounter === currentCandidateQuestionsLength) {
					formData.append("video", blob);
					formData.append("question_id", videos_question_list[videoCounter - 1].question_id);

					// aca ver debo mandar el postulationId
					dispatch(SendVideo(postulationId!, formData));

					window.URL.revokeObjectURL(video_url);
					videoChunks.current = [];
					navigate(`${VIEW_VIDEO_COMPLETED}?token=${token}`);
				} else {
					formData.append("video", blob);
					formData.append("question_id", videos_question_list[videoCounter - 1].question_id);

					videoChunks.current = [];
					setVideoCounter(videoCounter + 1);
					dispatch(SendVideo(postulationId!, formData));
					setIsStopped(false);
					setTimeout(() => {
						resetTimer();
						handleStartCaptureClick();
					}, 500);
				}
			}, 500);
		}
	}, [
		postulationId,
		dispatch,
		navigate,
		setVideoCounter,
		videoCounter,
		videos_question_list,
		handleStartCaptureClick,
		resetTimer,
		token,
	]);

	useEffect(() => {
		if (time.minute === 2) {
			setTimeout(() => {
				handleStopCaptureClick();
			}, 500);
		}
	}, [time.minute, time.second, handleStopCaptureClick]);

	useEffect(() => {
		setTimeout(() => {
			handleStartCaptureClick();
		}, 500);
	}, [handleStartCaptureClick]);

	return (
		<div className="relative">
			{/* ANIMATION OF RECORDING */}
			<div className={`${capture ? "block" : "hidden"}`}>
				<Recording />
				<ProgressVideoBar value={progress} />
			</div>

			{/* CAMERA */}
			<CameraOn webcamRef={webcamRef} isCameraOn={isCameraOn} init={init} />

			{/* VALIDATION IF RECORDING */}
			{capture && <Stop onClick={handleStopCaptureClick} />}

			{/* VALIDATION WHEN RECORDING STOP */}
			{isStopped && (
				<div className="flex flex-row mobile:justify-center laptop:justify-start font-raleway w-full mt-5">
					<button
						className="cursor-pointer rounded-2xl bg-white text-gray-color font-bold text-sm py-3 px-7 w-[140px] h-[54px] shadow-lg border border-gray-color mt-5"
						onClick={handleRemakeCaptureClick}
					>
						<div className="flex items-center justify-between">
							Remake &nbsp; <MdRestartAlt className="text-gray-color w-[20px] h-[20px]" />
						</div>
					</button>

					<button
						className="cursor-pointer rounded-2xl bg-white text-cyan-color font-bold text-sm py-3 px-7 w-[172px] h-[54px] shadow-lg border border-cyan-color mt-5 ml-5"
						onClick={handleSubmitCapture}
					>
						Save & Continue
					</button>
				</div>
			)}
		</div>
	);
};

export default Stream;
