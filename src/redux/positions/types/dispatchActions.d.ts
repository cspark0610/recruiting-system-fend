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

export type SetIsActivePositionAction = {
  type: ActionTypes.SET_IS_ACTIVE;
};

export type SetSuccess = {
  type: ActionTypes.SET_SUCCESS;
  payload: {
    status: number;
    message: string;
  };
};

export type ClearSuccessAction = {
  type: ActionTypes.CLEAR_SUCCESS;
};

export type SetLoadingAction = {
  type: ActionTypes.SET_IS_LOADING | ActionTypes.SET_IS_NOT_LOADING;
};

export type SetPositionErrorAction = {
  type: ActionTypes.SET_POSITION_ERROR;
  payload: IError;
};

export type CleanPositionErrorAction = {
  type: ActionTypes.CLEAN_POSITION_ERROR;
};

export type Action =
  | GetAllPositionsAction
  | GetPositionInfoAction
  | CreatePositionAction
  | SetPositionErrorAction
  | CleanPositionErrorAction
  | SetLoadingAction
  | SetIsActivePositionAction
  | SetSuccess
  | ClearSuccessAction;
