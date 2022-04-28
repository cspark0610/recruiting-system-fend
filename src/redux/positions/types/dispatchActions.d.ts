import { ActionTypes } from "./actionNames";
import { IPosition } from "./data";

export type GetAllPositionsAction = {
  type: ActionTypes.GET_ALL_POSITIONS;
  payload: IPosition[];
};

export type GetPositionInfoAction = {
  type: ActionTypes.GET_POSITION_INFO;
  payload: IPosition;
};

export type Action = GetAllPositionsAction | GetPositionInfoAction;
