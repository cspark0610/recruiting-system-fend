import { combineReducers } from '@reduxjs/toolkit';
import CandidateReducer from '../candidates/reducers/CandidateReducer';
import ConclusionReducer from '../conclusions/reducers/ConclusionReducer';
import UserReducer from '../users/reducers/UserReducer';
import JobReducer from '../jobs/reducers/JobReducer';

export default combineReducers({
  data: UserReducer,
  info: CandidateReducer,
  feed: ConclusionReducer,
  job: JobReducer,
});
