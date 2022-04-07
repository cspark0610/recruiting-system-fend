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

const initialState = {
  user: {
    college: "",
    salary: "",
    available: "",
    skill: "",
    description: "",
    video: "",
  },
  userId: null,
  loading: null,
  error: null,
};

function CandidateReducer(state = initialState, action: any) {
  switch (action.type) {
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
        user: action.payload,
      };
    case GET_DATA_EDIT:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default CandidateReducer;
