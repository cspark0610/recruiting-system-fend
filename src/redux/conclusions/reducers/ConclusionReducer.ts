import {
  ADD_CONCLUSION,
  ADD_CONCLUSION_SUCCESS,
  ADD_CONCLUSION_ERROR,
  GET_ID,
  GET_CONCLUSION,
  GET_CONCLUSION_SUCCESS,
  GET_CONCLUSION_ERROR,
} from "../types";

const initialState = {
  feed: [
    {
      positiveComment: "",
      negativeComment: "",
    },
  ],
  id: null,
  loading: null,
  error: null,
};

function ConclusionReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_CONCLUSION:
    case GET_CONCLUSION:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CONCLUSION_SUCCESS:
      return {
        ...state,
        loading: false,
        feed: action.payload,
      };
    case ADD_CONCLUSION_ERROR:
    case GET_CONCLUSION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case GET_CONCLUSION_SUCCESS:
      return {
        ...state,
        loading: false,
        feed: action.payload,
      };
    default:
      return state;
  }
}

export default ConclusionReducer;
