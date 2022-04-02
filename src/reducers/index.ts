import { combineReducers } from "@reduxjs/toolkit";
import CandidateReducer from "./CandidateReducer";
import UsersReducer from "./UsersReducer";

export default combineReducers({
  data: UsersReducer,
  info: CandidateReducer,
});
