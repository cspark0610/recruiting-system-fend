import { InitialState } from '../types/states';
import { Action } from '../types/dispatchActions';

const initialState: InitialState = {
  jobs: [],
};

const JobReducer = (state = initialState, action: Action) => {};

export default JobReducer;
