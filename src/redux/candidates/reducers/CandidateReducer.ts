import {
  ADD_CANDIDATE,
  ADD_CANDIDATE_SUCCESS,
  ADD_CANDIDATE_ERROR,
  GET_ID,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  GET_DATA_EDIT,
  DATA_EDIT,
  DATA_EDIT_SUCCESS,
  DATA_EDIT_ERROR,
} from './../types';

import { ActionTypes } from '../types/index';
import { Action, InitialState } from './interfaces.interface';

const initialState: InitialState = {
  candidates: [],
  userId: null,
  loading: null,
  error: null,
};

function CandidateReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_CANDIDATES:
      return {
        ...state,
        candidates: state.candidates.concat(action.payload),
      };
    default: {
      return state;
    }
  }
}

export default CandidateReducer;
