import { IError, IPosition } from './data';

export type InitialState = {
  positions: IPosition[];
  info: IPosition;
  error: IError;
};
