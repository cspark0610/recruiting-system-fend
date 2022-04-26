import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types/actionNames';
import { GetAllJobsAction } from '../types/dispatchActions';
import { GetAllJobsResponse } from '../types/axiosResponses';
import { JOB_BASE_URL } from '../../../config/routes/endpoints';

export default function getAllJobs() {
  return async function (dispatch: Dispatch) {
    try {
      const { data } = await axios.get<GetAllJobsResponse>(JOB_BASE_URL);

      return dispatch<GetAllJobsAction>({
        type: ActionTypes.GET_ALL_JOBS,
        payload: data.jobs,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
