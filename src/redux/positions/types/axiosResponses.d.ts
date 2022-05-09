import { IPosition } from './data';

export type GetAllPositionsResponse = {
  status: number;
  data: {
    docs: IPosition[];
    totalDocs: number;
    limit: number;
    hasNextPage: boolean;
    nextPage: number;
    totalPages: number;
    page: number;
    prevPage: number;
    hasPrevPage: boolean;
    pagingCounter: number;
    offset: number;
  };
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

export type DeletePositionResponse = {
  status: number;
  message: string;
};
