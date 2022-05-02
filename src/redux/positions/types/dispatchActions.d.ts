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

export type CreatePositionAction = {
  type: ActionTypes.CREATE_POSITION;
  payload: IPosition;
};

export type SetLoadingAction = {
  type: ActionTypes.SET_IS_LOADING | ActionTypes.SET_IS_NOT_LOADING;
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
  | CreatePositionAction
  | SetErrorAction
  | CleanErrorAction
  | SetLoadingAction;
