import { ActionTypes } from '../types/index';

export type IConclusions = {
  conclusions: {
    good: Array<string>;
    bad: Array<string>;
  };
};

export type IJob = {
  title: string;
  designated?: Array<string>;
  client_name: string;
  rie_link: string;
  recruiter_filter: string;
  url?: string;
  isActive?: boolean;
  skills_required: Array<string>;
  video_questions_list: Array<IQuestion>;
};

export type IQuestion = {
  _id: string;
  question_id: number;
  question_title: string;
  video_key: string;
};

export type IVideoRecordingUrl = {
  _id: string;
  short_url: string;
  expiresAt: Date;
};

export type ICandidate = {
  _id?: string;
  name: string;
  email: string;
  phone: number;
  country: string;
  academic_training?: string;
  english_level: string;
  salary_expectations?: string;
  available_from?: Date;
  skills?: Array<string>;
  linkedin?: string;
  portfolio?: string;
  working_reason?: string;
  conclusions?: IConclusions;
  main_status?: string;
  secondary_status?: string;
  job: IJob;
  designated_recruiters?: Array<string>;
  video_recording_url?: IVideoRecordingUrl;
  videos_question_list?: Array<IQuestion>;
  cv?: string;
  isRejected?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type InitialState = {
  candidates: ICandidate[];
  userId: any;
  loading: any;
  error: any;
};

export type GetCandidatesResponse = {
  status: number;
  allCandidates: ICandidate[];
};

export type GetCandidatesAction = {
  type: ActionTypes.GET_CANDIDATES;
  payload: ICandidate[];
};

export type Action = GetCandidatesAction;
