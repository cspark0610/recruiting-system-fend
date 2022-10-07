import { BsFillRecordFill } from 'react-icons/bs'

interface Props {
	onClick(): void
	classes?: string
	isCameraOn: boolean
}

const Start: React.FC<Props> = ({
	onClick,
	classes,
	isCameraOn,
}) => {
	return (
		<div
			className={`${classes} mt-5 font-raleway mobile:grid mobile:justify-items-center laptop:flex laptop:items-start`}
		>
			<button
				className={`${
					!isCameraOn
						? 'cursor-not-allowed'
						: 'cursor-pointer'
				} text-cyan-color border-cyan-color rounded-2xl bg-white font-bold text-sm py-3 px-7 laptop:w-[145px] laptop:h-[54px] shadow-lg border mt-5`}
				onClick={onClick}
				disabled={!isCameraOn ? true : false}
			>
				<div className="flex items-center justify-between">
					Record &nbsp;{' '}
					<BsFillRecordFill className="w-[20px] h-[20px] text-red-color" />
				</div>
			</button>
		</div>
	)
}

export default Start
