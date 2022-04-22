import { ICandidate } from '../redux/candidates/types/data';

const getCandidatesByColumn = (candidates: ICandidate[]) => {
  const interested = candidates.filter(
    (candidate) => candidate.main_status === 'interested',
  );
  const applying = candidates.filter(
    (candidate) => candidate.main_status === 'applying',
  );
  const meeting = candidates.filter(
    (candidate) => candidate.main_status === 'meeting',
  );
  const chosen = candidates.filter(
    (candidate) => candidate.main_status === 'chosen',
  );

  return {
    interested,
    applying,
    meeting,
    chosen,
  };
};

export default getCandidatesByColumn;
