import {
  ADD_CANDIDATE,
  ADD_CANDIDATE_SUCCESS,
  ADD_CANDIDATE_ERROR,
  GET_DATA_LISTED,
  GET_DATA_LISTED_SUCCESS,
  GET_DATA_LISTED_ERROR,
  SET_USER_ID,
  GET_DATA_EDIT,
  DATA_EDITED_SUCCESS,
  DATA_EDITED_ERROR,
} from "../types/index";

const initialState = {
  user: {
    college: "",
    salary: "",
    available: "",
    skill: "",
    description: "",
  },
  userID: null,
  error: null,
  loading: false,
  userEdit: null,
};

function CandidateReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_CANDIDATE:
      return {
        ...state,
        loading: true,
      };
    case ADD_CANDIDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_DATA_LISTED_ERROR:
    case ADD_CANDIDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_DATA_LISTED_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_ID:
      return {
        ...state,
        userID: action.payload,
      };
    case GET_DATA_EDIT:
      return {
        ...state,
        userEdit: action.payload,
      };
    default:
      return state;
  }
}
export default CandidateReducer;
