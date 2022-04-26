import { ActionTypes } from './actionNames';
import { IPosition } from './data';

export type GetAllPositionsAction = {
  type: ActionTypes.GET_ALL_POSITIONS;
  payload: IPosition[];
};

export type Action = GetAllPositionsAction;
