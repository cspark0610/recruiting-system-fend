import { Dispatch } from 'redux';

import { ActionTypes } from '../types/actionNames';

import {
  GetAllPositionsAction,
  GetPositionInfoAction,
  CreatePositionAction,
  SetPositionErrorAction,
  SetSuccessAction,
  ClearSuccessAction,
} from '../types/dispatchActions';

import {
  GetAllPositionsResponse,
  GetPositionResponse,
  CreatePositionResponse,
  SetIsActiveResponse,
} from '../types/axiosResponses';

import {
  GET_ALL_POSITIONS,
  CREATE_POSITION,
  SET_IS_ACTIVE,
} from '../../../config/routes/endpoints';

import { IPosition } from '../types/data';

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
    } catch (error: any) {
      if (error.response) {
        dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
    }
  };
}

export function getPositionInfo(_id: string) {
  return async function (dispatch: Dispatch) {
    try {
      const { data } = await ClientAxios.get<GetPositionResponse>(
        `${GET_ALL_POSITIONS}/${_id}`,
      );
      return dispatch<GetPositionInfoAction>({
        type: ActionTypes.GET_POSITION_INFO,
        payload: data.positionInfo,
      });
    } catch (error: any) {
      if (error.response) {
        dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
    }
  };
}

export function createPosition(positionInfo: IPosition) {
  return async function (dispatch: Dispatch) {
    dispatch({ type: ActionTypes.SET_IS_LOADING });
    try {
      const { data } = await ClientAxios.post<CreatePositionResponse>(
        CREATE_POSITION,
        positionInfo,
      );

      dispatch({ type: ActionTypes.SET_IS_NOT_LOADING });

      return dispatch<CreatePositionAction>({
        type: ActionTypes.CREATE_POSITION,
        payload: data.newPosition,
      });
    } catch (error: any) {
      if (error.response) {
        dispatch({ type: ActionTypes.SET_IS_NOT_LOADING });

        dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
    }
  };
}

export function SetIsActive(_id: string) {
  return async function (dispatch: Dispatch) {
    dispatch({ type: ActionTypes.SET_IS_LOADING });

    try {
      const { data } = await ClientAxios.put<SetIsActiveResponse>(
        `${SET_IS_ACTIVE}/${_id}`,
      );

      dispatch({ type: ActionTypes.SET_IS_NOT_LOADING });

      return dispatch<SetSuccessAction>({
        type: ActionTypes.SET_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      if (error.response) {
        dispatch({ type: ActionTypes.SET_IS_NOT_LOADING });

        dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
    }
  };
}

export function ClearSuccess(dispatch: Dispatch) {
  return dispatch<ClearSuccessAction>({
    type: ActionTypes.CLEAR_SUCCESS,
  });
}
