/* ENDPOINTS FROM LINK 1 */
export const CREATE_CANDIDATE = '/candidate/create'

/* ENDPOINTS FROM LINK 2 */
export const POST_CANDIDATE = '/postulation/info/update'

/* ENDPOINTS FROM ADMIN */
export const POST_FEED = '/candidate/conclusions/update'

export const GET_ALL_CANDIDATES = '/candidate'
export const GET_ALL_POSTULATIONS = '/postulation'
export const GET_ALL_CANDIDATES_FILTERED = '/candidate/filter'
export const GET_ALL_CANDIDATES_FILTERED_EXPERT = '/candidate/expert/filter'
export const UPDATE_CANDIDATE_EMPLOYMENT_STATUS = '/candidate/employment_status/update'
export const ADD_POSTULATION_TO_CANDIDATE = '/candidate/add_postulation'
export const UPDATE_STATUS = '/postulation/status/update'
export const GENERATE_URL = '/postulation/url/create'
export const GET_VIDEO = '/postulation/video'
export const SEND_VIDEO = '/postulation/video/upload'
export const UPDATE_POSTULATION_INFO = '/postulation/info/update'
export const UPDATE_CANDIDATE_INFO = '/postulation/info/update'

export const GET_ALL_POSITIONS = '/position'
export const CREATE_POSITION = '/position/create'
export const UPDATE_POSITION = '/position/update'
export const SET_IS_ACTIVE = '/position/status/update'
export const DELETE_POSITION = '/position/delete'

export const UPDATE_CONCLUSION = '/candidate/conclusions/set'
export const VALIDATE_TOKEN = '/candidate/url/validate'
export const REJECT_CANDIDATE = '/candidate/reject'

/* ENDPOINTS FROM LOGIN */
export const GET_ALL_USERS = '/users'
export const LOGIN_USER = '/users/signIn'
export const LOGOUT_USER = '/users/signOut'
export const REFRESH_TOKENS = '/users/token/refresh'
export const UPDATE_USER = '/users/info/update'
