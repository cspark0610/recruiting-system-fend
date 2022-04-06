import {
  ADD_CANDIDATE,
  ADD_CANDIDATE_SUCCESS,
  ADD_CANDIDATE_ERROR,
  GET_ID,
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
    default:
      return state;
  }
}

export default CandidateReducer;
