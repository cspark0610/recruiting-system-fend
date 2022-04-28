import { Dispatch } from "redux";
import { ActionTypes } from "../types/actionNames";
import {
  GetAllPositionsAction,
  GetPositionInfoAction,
} from "../types/dispatchActions";
import {
  GetAllPositionsResponse,
  GetPositionResponse,
} from "../types/axiosResponses";
import { GET_ALL_POSITIONS } from "../../../config/routes/endpoints";
import ClientAxios from "../../../config/api/axios";

export default function getAllPositions() {
  return async function (dispatch: Dispatch) {
    try {
      const { data } = await ClientAxios.get<GetAllPositionsResponse>(
        GET_ALL_POSITIONS
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

export function getPositionInfo(_id: string) {
  return async function (dispatch: Dispatch) {
    try {
      const { data } = await ClientAxios.get<GetPositionResponse>(
        `${GET_ALL_POSITIONS}/${_id}`
      );
      return dispatch<GetPositionInfoAction>({
        type: ActionTypes.GET_POSITION_INFO,
        payload: data.positionInfo,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
