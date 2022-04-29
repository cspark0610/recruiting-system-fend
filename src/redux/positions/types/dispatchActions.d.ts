import { ActionTypes } from './actionNames';
import { IError, IPosition } from './data';

export type GetAllPositionsAction = {
  type: ActionTypes.GET_ALL_POSITIONS;
  payload: IPosition[];
};

export type GetPositionInfoAction = {
  type: ActionTypes.GET_POSITION_INFO;
  payload: IPosition;
};

export type SetErrorAction = {
  type: ActionTypes.SET_ERROR;
  payload: IError;
};

export type CleanErrorAction = {
  type: ActionTypes.CLEAN_ERROR;
};

export type Action =
  | GetAllPositionsAction
  | GetPositionInfoAction
  | SetErrorAction
  | CleanErrorAction;
