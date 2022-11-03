import { useSelector } from 'react-redux'
import { ICandidate } from '@/redux/candidates/types/data'
import { IQuestion } from '@/redux/positions/types/data'
import { State } from '@/redux/store/store'
import '@/assets/scss/CircleBar.scss'

type QskInterviewProps = {
	classes: string
	videoCounter?: number
	isRecording?: boolean
}

const QskInterview = ({ classes, videoCounter, isRecording }: QskInterviewProps) => {
	const candidateDetail: ICandidate = useSelector((state: State) => state.info.detail)

	const video_questions_list: IQuestion[] | undefined =
		candidateDetail.postulations![0].video_questions_list

	const renderVideoQuestionList = () => {
		return (
			<div className={`${classes} progress-bar mobile:mx-5 laptop:mx-0 w-full`}>
				{video_questions_list!.map((question: IQuestion) => (
					<div key={question.question_id} className={'step flex items-center'}>
						<div
							className={
								question.question_id === videoCounter
									? 'circle bg-blue-400 text-lg h-6 w-6 shadow-md shadow-cyan-color'
									: isRecording
									? 'circle hover:cursor-pointer'
									: 'circle'
							}
						>
							<span>{question.question_id}</span>
						</div>
						<div
							className={
								question.question_id === videoCounter
									? 'text-lg'
									: isRecording
									? 'cursor-pointer'
									: ''
							}
						>
							<button disabled={isRecording}>
								{' '}
								{/* TODO: create change video handler when not recording */}
								<span>{question.question_title}</span>
							</button>
						</div>
					</div>
				))}
			</div>
		)
	}

	return <>{renderVideoQuestionList()}</>
}

export default QskInterview
