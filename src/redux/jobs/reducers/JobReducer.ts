import { InitialState } from '../types/states';
import { ActionTypes } from '../types/actionNames';
import { Action } from '../types/dispatchActions';

const initialState: InitialState = {
  jobs: [],
};

const JobReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_JOBS: {
      return {
        ...state,
        jobs: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default JobReducer;
