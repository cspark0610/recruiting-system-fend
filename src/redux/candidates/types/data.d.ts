import { IPosition, IQuestion } from '../../positions/types/data';

export type IConclusions = {
  good: Array<string>;
  bad: Array<string>;
};

export type IVideoRecordingUrl = {
  _id: string;
  short_url: string;
  expiresAt: Date | undefined;
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
  position: IPosition;
  designated_recruiters?: Array<string>;
  video_recording_url?: IVideoRecordingUrl;
  videos_question_list?: Array<IQuestion>;
  cv?: string;
  isRejected?: boolean;
  url_link_2: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type IError = {
  status: number;
  message: string;
};

export type Filters = {
  position: Array<string>;
  status: Array<string>;
  query: string;
};
