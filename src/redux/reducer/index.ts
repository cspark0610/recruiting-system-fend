import { combineReducers } from "@reduxjs/toolkit";
import CandidateReducer from "../candidates/reducers/CandidateReducer";
import ConclusionReducer from "../conclusions/reducers/ConclusionReducer";
import UserReducer from "../users/reducers/UserReducer";
import PositionsReducer from "../positions/reducers/PositionsReducer";

export default combineReducers({
  user: UserReducer,
  info: CandidateReducer,
  feed: ConclusionReducer,
  positions: PositionsReducer,
});
