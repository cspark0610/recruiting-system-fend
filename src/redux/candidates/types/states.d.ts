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
  isUserEdit: boolean;
  loading: boolean;
  error: IError;
  currentFilters: {
    position: Array<string>;
    status: Array<string>;
    query: string;
  };
};
