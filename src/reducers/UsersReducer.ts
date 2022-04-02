import { ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR } from "../types/index";

const initialState = {
  user: [],
  loading: null,
  error: null,
};

function UsersReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: [...state.user, action.payload],
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default UsersReducer;
