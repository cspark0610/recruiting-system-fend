import { ActionTypes } from './actionNames';
import { IJob } from './data';

export type GetAllPositionsAction = {
  type: ActionTypes.GET_ALL_POSITIONS;
  payload: IJob[];
};

export type Action = GetAllPositionsAction;
