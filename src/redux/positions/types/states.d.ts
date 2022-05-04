import { IErrorPosition, IPosition } from './data';

export type InitialState = {
  positions: IPosition[];
  info: IPosition;
  error: IErrorPosition;
  loading: boolean;
  success: {
    status: number;
    message: string;
  };
};
