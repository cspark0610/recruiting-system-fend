import { IErrorPosition, IPosition } from './data';

export type InitialState = {
  data: {
    docs: IPosition[];
    totalDocs: number;
    totalPages: number;
    page: number;
    limit: number;
    offset: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextPage: number;
    prevPage: number;
    pagingCounter: number;
  };
  info: IPosition;
  error: IErrorPosition;
  loading: boolean;
  updating: boolean;
  success: {
    status: number;
    message: string;
  };
};
