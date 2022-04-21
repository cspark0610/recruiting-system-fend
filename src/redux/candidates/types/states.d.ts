import { ICandidate, IError } from './data';

export type CandidateState = {
  interested: ICandidate[];
  applying: ICandidate[];
  meeting: ICandidate[];
  chosen: ICandidate[];
};

export type InitialState = {
  candidates: CandidateState;
  userId: any;
  loading: boolean;
  error: IError;
};
