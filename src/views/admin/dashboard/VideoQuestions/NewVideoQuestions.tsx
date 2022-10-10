import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Back from '../../../../components/buttons/Back'
import Header from '../../../../components/questionary/Header'
import List from '../../../../components/questionary/List'
import { VIEW_OPEN_POSITIONS } from '../../../../config/routes/paths'
import {
	ClearInfo,
	getPositionInfo,
} from '../../../../redux/positions/actions/PositionsActions'
import {
	AppDispatch,
	State,
} from '../../../../redux/store/store'

function NewVideoQuestions() {
	const dispatch = useDispatch<AppDispatch>()
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
			<Back
				link={`${VIEW_OPEN_POSITIONS}/${_id}/video-questions`}
			/>
			<div className="max-w-[993px] w-[95%] mx-auto">
				<h1 className=" text-[#475564] text-2xl font-raleway font-semibold ">
					Video Questions for
					<span className="text-[#00ADEF]">
						{` ${positionInfo.title}`}
					</span>
					:
				</h1>
				<div className="w-full bg-[#FAFAFA] p-[30px] pb-[80px] mt-[30px]">
					<Header />
					<List />
				</div>
			</div>
		</div>
	)
}

export default NewVideoQuestions
