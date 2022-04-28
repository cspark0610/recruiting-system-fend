import { ActionTypes } from "../types/index";
import { ICandidate } from "./data";

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

export type CreateCandidateAction = {
  type: ActionTypes.CREATE_CANDIDATE;
  payload: ICandidate;
};

export type Action =
  | GetCandidatesAction
  | GetCandidatesFilteredAction
  | NotFoundWithFilers
  | SetLoadingAction
  | CreateCandidateAction;
