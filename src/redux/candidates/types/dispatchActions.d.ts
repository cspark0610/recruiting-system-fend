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

export type GetCandidateInfoAction = {
  type: ActionTypes.GET_CANDIDATE_DETAIL;
  payload: ICandidate;
};

export type ClearCandidateDetailAction = {
  type: ActionTypes.CLEAR_CANDIDATE_DETAIL;
};

export type CleanSuccessAction = {
  type: ActionTypes.CLEAN_SUCCESS;
};

export type SetDetailFinishedLoadingAction = {
  type: ActionTypes.SET_DETAIL_FINISHED_LOADING;
};

export type SetLoadingAction = {
  type: ActionTypes.SET_IS_LOADING | ActionTypes.SET_IS_NOT_LOADING;
};

export type SetUpdatingCandidateAction = {
  type:
    | ActionTypes.SET_IS_CANDIDATE_UPDATING
    | ActionTypes.SET_IS_NOT_CANDIDATE_UPDATING;
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

export type SetSuccessAction = {
  type: ActionTypes.SET_SUCCESS;
  payload: {
    status: number;
    message: string;
  };
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
  | GetCandidateInfoAction
  | SetCurrentFiltersAction
  | CleanFiltersAction
  | ClearCandidateDetailAction
  | SetDetailFinishedLoadingAction
  | CleanSuccessAction
  | SetSuccessAction;
