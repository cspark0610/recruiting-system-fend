import { ICandidate } from './data';

export type GetCandidatesResponse = {
  status: number;
  allCandidates: {
    interested: ICandidate[];
    applying: ICandidate[];
    meeting: ICandidate[];
    chosen: ICandidate[];
  };
};

export type GetCandidatesFilteredResponse = {
  status: number;
  candidatesFiltered: {
    interested: ICandidate[];
    applying: ICandidate[];
    meeting: ICandidate[];
    chosen: ICandidate[];
  };
};

export type GetCandidateDetail = {
  status: number;
  candidate: ICandidate;
};
