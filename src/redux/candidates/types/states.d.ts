import { ICandidate, IError } from './data';

export type InitialState = {
  candidates: ICandidate[];
  user: {
    college: string;
    salary: string;
    available: string;
    skills: string[];
    description: string;
    video: string;
  };
  userId: any;
  loading: boolean;
  error: IError;
  cleanFilters: boolean;
  cleanSearch: boolean;
  appliedFilters: boolean;
};
