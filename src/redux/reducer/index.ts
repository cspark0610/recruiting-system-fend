import { combineReducers } from "@reduxjs/toolkit";
import CandidateReducer from "../candidates/reducers/CandidateReducer";
import UserReducer from "../users/reducers/UserReducer";

export default combineReducers({
  data: UserReducer,
  info: CandidateReducer,
});
