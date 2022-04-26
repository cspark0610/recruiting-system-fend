export type IColumnInfo = {
  main_text: string;
  status_info: {
    text: string;
    id: number;
    color: string;
  }[];
};

export const InterestedInfo: IColumnInfo = {
  main_text:
    'These are the candidates that have completed the first application from, and will be evaluated trough a phone-call filter',
  status_info: [
    {
      text: 'Candidate needs to be evaluated',
      id: 1,
      color: 'bg-[#475564]',
    },
    {
      text: 'Candidate is in doubt to continue',
      id: 2,
      color: 'bg-[#FBBC41]',
    },
    {
      text: 'Candidate is dismissed to continue',
      id: 3,
      color: 'bg-[#F84D44]',
    },
  ],
};

export const ApplyingInfo: IColumnInfo = {
  main_text:
    'These are the candidates that are completing the second application process given to them after the phone-call filter',
  status_info: [
    {
      text: 'Candidate is completing the application',
      id: 1,
      color: 'bg-[#475564]',
    },
    {
      text: 'Candidate needs to be evaluated',
      id: 2,
      color: 'bg-[#FBBC41]',
    },
    {
      text: 'Candidate is dismissed to continue',
      id: 3,
      color: 'bg-[#F84D44]',
    },
  ],
};

export const MeetingInfo: IColumnInfo = {
  main_text:
    'These are the candidates that will be evaluated by the recruiter via a videocall',
  status_info: [
    {
      text: 'Recruiter has to arrange the meeting with the candidate',
      id: 1,
      color: 'bg-[#475564]',
    },
    {
      text: 'Recruiter had the meeting and is in doubt to continue the process with a candidate',
      id: 2,
      color: 'bg-[#FBBC41]',
    },
    {
      text: 'Recruiter had the meeting and the candidate is dismissed to continue',
      id: 3,
      color: 'bg-[#F84D44]',
    },
  ],
};

export const ChosenInfo: IColumnInfo = {
  main_text:
    'This is the last step for the candidates application process. They will be evaluated by the CEO and/or client to complete the process',
  status_info: [
    {
      text: 'CEO has to arrange a meeting with the candidate',
      id: 1,
      color: 'bg-[#475564]',
    },
    {
      text: 'CEO had the meeting and has aproved the candidate',
      id: 2,
      color: 'bg-[#35C549]',
    },
    {
      text: 'CEO had the meeting and is in doubt to continue the process with a candidate',
      id: 3,
      color: 'bg-[#FBBC41]',
    },
    {
      text: 'CEO had the meeting and the candidate is dismissed to continue',
      id: 4,
      color: 'bg-[#F84D44]',
    },
  ],
};
