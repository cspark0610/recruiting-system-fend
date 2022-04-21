import { IJob } from './data';

export type GetAllJobsAction = {
  type: 'GET_ALL_JOBS';
  payload: IJob[];
};

export type Action = GetAllJobsAction;
