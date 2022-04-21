import { IJob, IQuestion } from '../../jobs/types/data';

export type IConclusions = {
  conclusions: {
    good: Array<string>;
    bad: Array<string>;
  };
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

export type IError = {
  status: number;
  message: string;
};
