import { ActionTypes } from '../types/index';
import { InitialState } from '../types/states';
import { Action } from '../types/dispatchActions';

const initialState: InitialState = {
  users: [],
  info: {
    _id: '',
    name: '',
    email: '',
    phone: '',
    position_name: '',
    role: {
      _id: '',
      name: '',
    },
  },
  loading: false,
  authenticated: false,
  error: {
    status: 400,
    message: '',
  },
  success: {
    status: 200,
    message: '',
  },
};

function UserReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case ActionTypes.SET_USER_INFO: {
      return {
        ...state,
        info: action.payload,
      };
    }

    case ActionTypes.SET_IS_USER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.SET_IS_USER_NOT_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case ActionTypes.SET_USER_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ActionTypes.SET_USER_SUCCESS: {
      return {
        ...state,
        success: action.payload,
        authenticated: true,
      };
    }
    default:
      return state;
  }
}

export default UserReducer;
