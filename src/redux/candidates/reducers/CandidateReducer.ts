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
import { InitialState } from '../types/states';
import { Action } from '../types/dispatchActions';

const initialState: InitialState = {
  candidates: [],
  userId: null,
  loading: false,
  error: {
    status: 400,
    message: '',
  },
  positionFilterLength: 0,
  statusFilterLength: 0,
  cleanFilters: false,
  cleanSearch: false,
};

function CandidateReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_CANDIDATES: {
      return {
        ...state,
        candidates: action.payload,
      };
    }

    case ActionTypes.GET_CANDIDATES_FILTERED: {
      return {
        ...state,
        candidates: action.payload,
      };
    }

    case ActionTypes.SET_IS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case ActionTypes.SET_IS_NOT_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    case ActionTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case ActionTypes.CLEAN_ERROR: {
      return {
        ...state,
        error: {
          status: 400,
          message: '',
        },
      };
    }

    case ActionTypes.CLEAN_FILTERS: {
      return {
        ...state,
        cleanFilters: !state.cleanFilters,
      };
    }

    case ActionTypes.CLEAN_SEARCH: {
      return {
        ...state,
        cleanSearch: !state.cleanSearch,
      };
    }

    default: {
      return state;
    }
  }
}

export default CandidateReducer;
