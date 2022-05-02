import { ActionTypes } from "../types/index";

const initialState = {
  feed: [],
  id: null,
  loading: null,
  error: null,
};

function ConclusionReducer(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_CONCLUSION:
    case ActionTypes.GET_CONCLUSION:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.ADD_CONCLUSION_SUCCESS:
      return {
        ...state,
        loading: false,
        feed: action.payload,
      };
    case ActionTypes.ADD_CONCLUSION_ERROR:
    case ActionTypes.GET_CONCLUSION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.GET_ID_CONCLUSION:
      return {
        ...state,
        id: action.payload,
      };
    case ActionTypes.GET_CONCLUSION_SUCCESS:
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
