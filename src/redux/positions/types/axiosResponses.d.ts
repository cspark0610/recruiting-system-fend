import { IPosition } from './data';

export type GetAllPositionsResponse = {
  status: number;
  positions: IPosition[];
};

export type GetPositionResponse = {
  status: number;
  positionInfo: IPosition;
};

export type CreatePositionResponse = {
  status: number;
  newPosition: IPosition;
};

export type SetIsActiveResponse = {
  status: number;
  message: string;
};
