import { useDispatch, useSelector } from "react-redux";
//import { BsPlay } from "react-icons/bs";
import { AppDispatch, State } from "../../../../redux/store/store";
import { IQuestion } from "../../../../redux/positions/types/data";
import QskInterview from "../../../extras/QskInterview";
import { GetVideo } from "../../../../redux/candidates/actions/CandidateAction";
import { useEffect } from "react";
import { UseGetPostulationById } from "../../../../hooks/useGetPostulationById";

interface Props {
	postulationId: string;
}
const Videos: React.FC<Props> = ({ postulationId }) => {
	const dispatch = useDispatch<AppDispatch>();
	const detail = useSelector((state: State) => state.info.detail);
	const { postulation } = UseGetPostulationById(detail, postulationId);

	const hasUploaded: IQuestion[] = postulation?.video_questions_list!.filter(
		(video: IQuestion) => video.video_key !== "",
	);

	const video_keys: string[] = hasUploaded.map((h) => h.video_key);

	useEffect(() => {
		if (video_keys.length === 2) {
			dispatch(GetVideo(video_keys[0]));
			dispatch(GetVideo(video_keys[1]));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const videos_recorded = useSelector(
		(state: State) => state.info.postulation.videos_recorded,
	);

	return (
		<div className="grid justify-items-center">
			<div className="mt-[48px] grid justify-items-start w-[85%]">
				<p className="font-raleway font-semibold text-gray-color text-[20px]">
					{detail.name}
				</p>
			</div>
			<section className="grid justify-items-center grid-cols-2 gap-[36px] w-[85%]">
				<div className="w-full">
					<div className="my-[32px]">
						<div className="relative bg-light-color border-light-color rounded-[10px] w-[414px] h-[322px]">
							{/*
							 <span className="absolute top-[35%] left-[165px]">
								<BsPlay className="text-cyan-color w-[81px] h-[85px]" />
							</span>
							 */}

							{/* only 2 videos */}
							{videos_recorded.length > 0 && (
								<>
									<video
										id="video-interview"
										controls
										src={`${videos_recorded[0]}`}
									>
										<source type="video/mp4" />
									</video>

									<video
										id="video-interview"
										controls
										src={`${videos_recorded[1]}`}
									>
										<source type="video/mp4" />
									</video>
								</>
							)}
						</div>
						{!hasUploaded && (
							<p className="relative font-raleway text-gray-color text-sm mt-[17px]">
								*This candidate has not uploaded any video yet.
							</p>
						)}
					</div>
				</div>
				<div className="w-full">
					<div className="my-[32px]">
						<p className="font-raleway text-gray-color text-[14px] font-bold uppercase my-3">
							Questions
						</p>
						<div className="relative">
							<QskInterview classes="text-[12px]" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Videos;
