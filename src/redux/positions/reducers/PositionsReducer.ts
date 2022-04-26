import { InitialState } from '../types/states';
import { ActionTypes } from '../types/actionNames';
import { Action } from '../types/dispatchActions';

const initialState: InitialState = {
  positions: [],
};

const PositionsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_POSITIONS: {
      return {
        ...state,
        positions: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default PositionsReducer;
