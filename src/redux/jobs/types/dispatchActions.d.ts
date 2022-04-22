import { ActionTypes } from './actionNames';
import { IJob } from './data';

export type GetAllJobsAction = {
  type: ActionTypes.GET_ALL_JOBS;
  payload: IJob[];
};

export type Action = GetAllJobsAction;
