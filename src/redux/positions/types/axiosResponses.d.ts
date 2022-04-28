import { IPosition } from "./data";

type GetAllPositionsResponse = {
  status: number;
  positions: IPosition[];
};

type GetPositionResponse = {
  status: number;
  positionInfo: IPosition;
};
