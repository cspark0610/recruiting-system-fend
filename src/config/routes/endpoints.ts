const { NODE_ENV } = process.env;

/* ENDPOINTS FROM LINK 1 */
export const POST_USER = '/users';

/* ENDPOINTS FROM LINK 2 */
export const POST_CANDIDATE = '/candidates';
export const CANDIDATE_BASE_URL =
  NODE_ENV === 'development'
    ? 'http://localhost:3001/candidate'
    : 'https://fulltimeforce-video-interview.herokuapp.com/candidate';

export const JOB_BASE_URL =
  NODE_ENV === 'development'
    ? 'http://localhost:3001/job'
    : 'https://fulltimeforce-video-interview.herokuapp.com/job';

/* ENDPOINTS FROM ADMIN */
export const POST_FEED = '/feeds';
