import { InitialState } from '../types/states';
import { ActionTypes } from '../types/actionNames';
import { Action } from '../types/dispatchActions';

const initialState: InitialState = {
  positions: [],
  info: {
    title: '',
    client_name: '',
    rie_link: '',
    recruiter_filter: '',
    priority: '',
    skills_required: [''],
    designated: [''],
    video_questions_list: [],
  },
  error: {
    status: 400,
    message: '',
  },

  success: {
    status: 200,
    message: '',
  },

  updating: false,
  loading: false,
};

const PositionsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_POSITIONS: {
      return {
        ...state,
        positions: action.payload,
      };
    }

    case ActionTypes.GET_POSITION_INFO: {
      return {
        ...state,
        info: action.payload,
      };
    }

    case ActionTypes.CREATE_POSITION: {
      return {
        ...state,
        positions: state.positions.concat(action.payload),
      };
    }

    case ActionTypes.SET_POSITION_ERROR: {
      return {
        ...state,
        error: action.payload,
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

    case ActionTypes.SET_SUCCESS: {
      return {
        ...state,
        success: action.payload,
      };
    }

    case ActionTypes.CLEAR_SUCCESS: {
      return {
        ...state,
        success: {
          status: 200,
          message: '',
        },
      };
    }

    case ActionTypes.CLEAN_POSITION_ERROR: {
      return {
        ...state,
        error: {
          status: 400,
          message: '',
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default PositionsReducer;
