import { ICandidate } from './data';

export type GetCandidatesResponse = {
  status: number;
  allCandidates: ICandidate[];
};

export type GetCandidateInfoResponse = {
  status: number;
  candidate: ICandidate;
};

export type GetCandidatesFilteredResponse = {
  status: number;
  candidatesFiltered: ICandidate[];
};

export type GetCandidateDetail = {
  status: number;
  candidate: ICandidate;
};

export type CreateCandidateResponse = {
  status: number;
  candidate: ICandidate;
};

export type UpdateCandidateStatusResponse = {
  status: number;
  message: string;
};
