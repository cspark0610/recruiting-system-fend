export type IJob = {
  _id?: string;
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

export type IError = {
  status: number;
  message: string;
};
