import { Dispatch } from 'redux';
import { ActionTypes } from '../types/actionNames';
import { GetAllPositionsAction } from '../types/dispatchActions';
import { GetAllPositionsResponse } from '../types/axiosResponses';
import { GET_ALL_POSITIONS } from '../../../config/routes/endpoints';
import ClientAxios from '../../../config/api/axios';

export default function getAllPositions() {
  return async function (dispatch: Dispatch) {
    try {
      const { data } = await ClientAxios.get<GetAllPositionsResponse>(
        GET_ALL_POSITIONS,
      );

      return dispatch<GetAllPositionsAction>({
        type: ActionTypes.GET_ALL_POSITIONS,
        payload: data.positions,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
