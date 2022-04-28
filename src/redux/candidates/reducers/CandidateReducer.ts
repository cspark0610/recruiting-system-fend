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
} from "./../types";

import { ActionTypes } from "../types/index";
import { InitialState } from "../types/states";
import { Action } from "../types/dispatchActions";

const initialState: InitialState = {
  candidates: [],
  user: {
    college: "",
    salary: "",
    available: "",
    skills: [""],
    description: "",
    video: "",
  },
  userId: null,
  isUserEdit: false,
  loading: false,
  error: {
    status: 400,
    message: "",
  },
  cleanFilters: false,
  cleanSearch: false,
  appliedFilters: false,
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

    case ActionTypes.CREATE_CANDIDATE: {
      return {
        ...state,
        candidates: state.candidates.concat(action.payload),
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
          message: "",
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

    case ActionTypes.SET_APPLIED_FILTERS: {
      return {
        ...state,
        appliedFilters: !state.appliedFilters,
      };
    }
    case ADD_CANDIDATE:
    case GET_DATA:
    case DATA_EDIT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CANDIDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case ADD_CANDIDATE_ERROR:
    case GET_DATA_ERROR:
    case DATA_EDIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_DATA_EDIT:
      return {
        ...state,
        loading: false,
        isToEdit: true,
        user: action.payload,
      };
    case DATA_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        isToEdit: false,
        user: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default CandidateReducer;
