const headers = [
  {
    key: 'interested',
    text: 'Interested in',
  },
  {
    key: 'applying',
    text: 'Applying for',
  },
  {
    key: 'meeting',
    text: 'Meeting for',
  },
  {
    key: 'chosen',
    text: 'Chosen for',
  },
];

export default function getCandidateDetailHeader(main_status: string) {
  return headers.find((header) => header.key === main_status)?.text;
}
