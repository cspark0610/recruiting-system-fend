import { ActionTypes } from '../types/index';
import { ICandidate, IError } from './data';

export type GetCandidatesAction = {
  type: ActionTypes.GET_CANDIDATES;
  payload: CandidateState;
};

export type GetCandidatesFilteredAction = {
  type: ActionTypes.GET_CANDIDATES_FILTERED;
  payload: CandidateState;
};

export type SetLoadingAction = {
  type: ActionTypes.SET_IS_LOADING | ActionTypes.SET_IS_NOT_LOADING;
};

export type SetErrorAction = {
  type: ActionTypes.SET_ERROR;
  payload: IError;
};

export type ClearErrorAction = {
  type: ActionTypes.CLEAR_ERROR;
};

export type CreateCandidateAction = {
  type: ActionTypes.CREATE_CANDIDATE;
  payload: ICandidate;
};

export type SetCurrentFiltersAction = {
  type: ActionTypes.SET_CURRENT_FILTERS;
  payload: {
    position: Array<string>;
    status: Array<string>;
    query: string;
  };
};

export type CleanFiltersAction = {
  type: ActionTypes.CLEAN_FILTERS;
};

export type Action =
  | GetCandidatesAction
  | GetCandidatesFilteredAction
  | NotFoundWithFilers
  | SetLoadingAction
  | CreateCandidateAction
  | SetErrorAction
  | ClearErrorAction
  | SetCurrentFiltersAction
  | CleanFiltersAction;
