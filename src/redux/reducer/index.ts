import { combineReducers } from '@reduxjs/toolkit'
import CandidateReducer from '../candidates/reducers/CandidateReducer'
import UserReducer from '../users/reducers/UserReducer'
import PositionsReducer from '../positions/reducers/PositionsReducer'

export default combineReducers({
	user: UserReducer,
	info: CandidateReducer,
	positions: PositionsReducer,
})
