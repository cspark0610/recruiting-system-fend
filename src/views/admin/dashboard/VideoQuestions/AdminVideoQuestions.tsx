import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Back from '../../../../components/buttons/Back'
import CreateNew from '../../../../components/buttons/CreateNew'
import Header from '../../../../components/videoQuestions/Header'
import List from '../../../../components/videoQuestions/List'
import { VIEW_OPEN_POSITIONS } from '../../../../config/routes/paths'
import {
	ClearInfo,
	getPositionInfo,
} from '../../../../redux/positions/actions/PositionsActions'
import {
	AppDispatch,
	State,
} from '../../../../redux/store/store'

function AdminVideoQuestions() {
	const dispatch = useDispatch<AppDispatch>()
	const [questionarySelected, setQuestionarySelected] =
		useState<questionary | null>({
			name: 'Questions for UX Designers',
		})
	const [questionaries, setQuestionaries] = useState<
		questionary[]
	>([
		{
			name: 'Questions for UX Designers',
		},
		{
			name: 'Questions for UX Designers',
		},
		{
			name: 'Questions for UX Designers',
		},
		{
			name: 'Questions for UX Designers',
		},
	])

	const { _id } = useParams()
	const positionInfo = useSelector(
		(state: State) => state.positions.info,
	)

	useEffect(() => {
		if (_id) {
			dispatch(getPositionInfo(_id))
		}

		return () => {
			dispatch(ClearInfo(dispatch))
		}
	}, [dispatch, _id])

	return (
		<div className="flex flex-col mt-32">
			<Back link={`${VIEW_OPEN_POSITIONS}`} />
			<div className="max-w-[993px] w-[95%] mx-auto">
				<h1 className=" text-[#475564] text-2xl font-raleway font-semibold ">
					Video Questions for
					<span className="text-[#00ADEF]">
						{` ${positionInfo.title}`}
					</span>
					:
				</h1>
				<Header
					questionarySelected={questionarySelected}
					position={positionInfo}
				/>
				{questionaries.length === 0 ? null : (
					<List questionaries={questionaries} />
				)}
			</div>
		</div>
	)
}

export default AdminVideoQuestions
