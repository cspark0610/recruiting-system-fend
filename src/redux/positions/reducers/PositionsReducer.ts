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

    case ActionTypes.SET_ERROR: {
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

    case ActionTypes.CLEAN_ERROR: {
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
