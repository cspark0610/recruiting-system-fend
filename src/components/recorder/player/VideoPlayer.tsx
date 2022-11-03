import { BsPlay } from 'react-icons/bs'
import { MdRestartAlt } from 'react-icons/md'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

interface Props {
	source?: string
	onClick: any
}

const VideoPlayer = ({ source, onClick }: Props) => {
	/*  */
	const video = source //temporal

	return (
		<div
			className={`relative ${
				!video && 'bg-gradient-to-b from-gray-color to-light-color border-light-color'
			} rounded-[10px] max-w-full mobile:w-[350px] mobile:h-[236px] tablet:w-[400px] tablet:h-[320px] laptop:w-[400px] laptop:h-[320px] mobile:my-[35px] tablet:my-0 laptop:my-0`}
		>
			{/* QUESTION */}
			<div className="relative">
				<div className="absolute top-[10px] left-[25px]">
					<span className="font-raleway text-white mobile:text-[12px] tablet:text-[20px] laptop:text-[15px]">
						<span className="font-bold text-[20px]">1</span>
						&nbsp; Tell me about yourself.
					</span>
				</div>
			</div>

			{/* BUTTON TO REMAKE VIDEO */}
			<div className="relative z-10">
				<div className="absolute top-[10px] right-[20px]">
					<button
						className={`font-raleway text-white text-[12px] w-[76px] h-[21px] border border-white bg-transparent rounded-[5px] px-1 ${
							video && 'cursor-pointer'
						}`}
						onClick={video && onClick}
					>
						<div className="flex items-center justify-between">
							<span onClick={onClick}>Remake &nbsp; </span>
							<MdRestartAlt className="text-white w-[11px] h-[11px]" />
						</div>
					</button>
				</div>
			</div>

			{/* BUTTONS TO NEXT VIDEO */}
			<div className="relative">
				<button className="absolute mobile:top-[115px] mobile:left-[-25px] tablet:top-[135px] tablet:left-[-25px] laptop:top-[135px] laptop:left-[-25px]">
					<RiArrowLeftSLine className="text-gray-color w-[20px] h-[20px]" />
				</button>
				<button className="absolute mobile:top-[115px] mobile:right-[-25px] tablet:top-[135px] tablet:right-[-25px] laptop:top-[135px] laptop:right-[-25px]">
					<RiArrowRightSLine className="text-gray-color w-[20px] h-[20px]" />
				</button>
			</div>

			{/* BUTTON PLAY */}
			<div
				className={`${
					video && 'hidden'
				} absolute mobile:top-[100px] mobile:left-[150px] tablet:top-[135px] tablet:left-[175px] laptop:top-[135px] laptop:left-[175px]`}
			>
				<button className="font-raleway text-gray-color text-xs" id="play-button">
					<BsPlay className="w-[41px] h-[45px] text-white" />
				</button>
			</div>

			{/* VIDEO SOURCE */}
			{video && (
				<video id="video-interview" controls>
					<source src={video} type="video/webm;codecs=vp9,opus" />
				</video>
			)}
		</div>
	)
}

export default VideoPlayer
