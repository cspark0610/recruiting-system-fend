import { ICandidate, IError } from './data';

export type InitialState = {
  candidates: ICandidate[];
  userId: any;
  loading: boolean;
  error: IError;
  positionFilterLength: number;
  statusFilterLength: number;
  cleanFilters: boolean;
  cleanSearch: boolean;
};
