export type IColumnInfo = {
  main_text: string;
  status_info: string[];
};

export const InterestedInfo: IColumnInfo = {
  main_text:
    'These are the candidates that have completed the first application from, and will be evaluated trough a phone-call filter',
  status_info: [
    'Candidate needs to be evaluated',
    'Candidate is in doubt to continue',
    'Candidate is dismissed to continue',
  ],
};

export const ApplyingInfo: IColumnInfo = {
  main_text:
    'These are the candidates that are completing the second application process given to them after the phone-call filter',
  status_info: [
    'Candidate is completing the application',
    'Candidate needs to be evaluated',
    'Candidate is dismissed to continue',
  ],
};

export const MeetingInfo: IColumnInfo = {
  main_text:
    'These are the candidates that will be evaluated by the recruiter via a videocall',
  status_info: [
    'Recruiter has to arrange the meeting with the candidate',
    'Recruiter had the meeting and is in doubt to continue the process with a candidate',
    'Recruiter had the meeting and the candidate is dismissed to continue',
  ],
};

export const ChosenInfo: IColumnInfo = {
  main_text:
    'This is the last step for the candidates application process. They will be evaluated by the CEO or client to complete the process',
  status_info: [
    'CEO has to arrange a meeting with the candidate',
    'CEO had the meeting and has aproved the candidate. The assigned recruiter will be contacted to complete the process',
    'CEO had the meeting and is in doubt to continue the process with a candidate',
    'CEO had the meeting and the candidate is dismissed to continue',
  ],
};
