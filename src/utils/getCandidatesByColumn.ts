import { ICandidate } from '../redux/candidates/types/data';

const getCandidatesByColumn = (candidates: ICandidate[]) => {
  const interested = candidates
    .filter((candidate) => candidate.main_status === 'interested')
    .sort((a, b) => {
      if (a.createdAt! > b?.createdAt!) {
        return -1;
      }

      if (a.createdAt! < b.createdAt!) {
        return 1;
      }
      return 0;
    });

  const applying = candidates
    .filter((candidate) => candidate.main_status === 'applying')
    .sort((a, b) => {
      if (a.updatedAt! > b.updatedAt!) {
        return -1;
      }

      if (a.updatedAt! < b.updatedAt!) {
        return 1;
      }
      return 0;
    });

  const meeting = candidates
    .filter((candidate) => candidate.main_status === 'meeting')
    .sort((a, b) => {
      if (a.updatedAt! > b.updatedAt!) {
        return -1;
      }

      if (a.updatedAt! < b.updatedAt!) {
        return 1;
      }
      return 0;
    });
  const chosen = candidates
    .filter((candidate) => candidate.main_status === 'chosen')
    .sort((a, b) => {
      if (a.updatedAt! > b.updatedAt!) {
        return -1;
      }

      if (a.updatedAt! < b.updatedAt!) {
        return 1;
      }
      return 0;
    });

  return {
    interested,
    applying,
    meeting,
    chosen,
  };
};

export default getCandidatesByColumn;
