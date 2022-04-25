import { combineReducers } from '@reduxjs/toolkit';
import CandidateReducer from '../candidates/reducers/CandidateReducer';
import JobReducer from '../jobs/reducers/JobReducer';
import ConclusionReducer from '../conclusions/reducers/ConclusionReducer';
import UserReducer from '../users/reducers/UserReducer';

export default combineReducers({
  data: UserReducer,
  info: CandidateReducer,
  job: JobReducer,
  feed: ConclusionReducer,
});
