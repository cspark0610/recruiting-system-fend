import { Dispatch } from 'redux';

import { ActionTypes } from '../types/actionNames';

import {
  GetAllPositionsAction,
  GetPositionInfoAction,
  CreatePositionAction,
  SetPositionErrorAction,
  SetSuccessAction,
  ClearSuccessAction,
  CleanPositionErrorAction,
  SetLoadingAction,
  GetActivePositionsAction,
  GetInactivePositionsAction,
} from '../types/dispatchActions';

import {
  GetAllPositionsResponse,
  GetPositionResponse,
  CreatePositionResponse,
  SetIsActiveResponse,
  DeletePositionResponse,
} from '../types/axiosResponses';

import {
  GET_ALL_POSITIONS,
  CREATE_POSITION,
  SET_IS_ACTIVE,
  DELETE_POSITION,
} from '../../../config/routes/endpoints';

import { IPosition } from '../types/data';
import { VIEW_LOGIN } from '../../../config/routes/paths';

import ClientAxios, { PrivateAxios } from '../../../config/api/axios';

export default function getAllPositions(list: string) {
  return async function (dispatch: Dispatch) {
    try {
      const { data } = await ClientAxios.get<GetAllPositionsResponse>(
        `${GET_ALL_POSITIONS}?list=${list}`,
      );

      return dispatch<GetAllPositionsAction>({
        type: ActionTypes.GET_ALL_POSITIONS,
        payload: data.data,
      });
    } catch (error: any) {
      if (error.response) {
        dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

        dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
    }
  };
}

export function GetActivePositions(limit: number, page?: number) {
  return async function (dispatch: Dispatch) {
    dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_LOADING });

    try {
      const { data } = await ClientAxios.get<GetAllPositionsResponse>(
        `${GET_ALL_POSITIONS}?page=${page}&limit=${limit}&list=active`,
      );

      dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

      return dispatch<GetActivePositionsAction>({
        type: ActionTypes.GET_ACTIVE_POSITIONS,
        payload: data.data,
      });
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 400) {
          window.location.href = VIEW_LOGIN;
        }
        dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

        dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
      dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

      dispatch<SetPositionErrorAction>({
        type: ActionTypes.SET_POSITION_ERROR,
        payload: error,
      });
    }
  };
}

export function GetInactivePositions(limit: number, page?: number) {
  return async function (dispatch: Dispatch) {
    dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_LOADING });

    try {
      const { data } = await ClientAxios.get<GetAllPositionsResponse>(
        `${GET_ALL_POSITIONS}?page=${page}&limit=${limit}&list=inactive`,
      );

      dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

      return dispatch<GetInactivePositionsAction>({
        type: ActionTypes.GET_INACTIVE_POSITIONS,
        payload: data.data,
      });
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 400) {
          window.location.href = VIEW_LOGIN;
        }
        dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

        dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
      dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

      dispatch<SetPositionErrorAction>({
        type: ActionTypes.SET_POSITION_ERROR,
        payload: error,
      });
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
          payload: error,
        });
      }
    }
  };
}

export function createPosition(positionInfo: IPosition) {
  return async function (dispatch: Dispatch) {
    dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_LOADING });

    try {
      const { data } = await ClientAxios.post<CreatePositionResponse>(
        CREATE_POSITION,
        positionInfo,
      );

      dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

      dispatch<SetSuccessAction>({
        type: ActionTypes.SET_SUCCESS,
        payload: {
          status: 201,
          message: 'Position created successfully',
        },
      });

      return dispatch<CreatePositionAction>({
        type: ActionTypes.CREATE_POSITION,
        payload: data.newPosition,
      });
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 400) {
          window.location.href = VIEW_LOGIN;
        }
        dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

        return dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
      dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

      return dispatch<SetPositionErrorAction>({
        type: ActionTypes.SET_POSITION_ERROR,
        payload: error,
      });
    }
  };
}

export function SetIsActive(_id: string) {
  return async function (dispatch: Dispatch) {
    dispatch({ type: ActionTypes.SET_IS_UPDATING });

    try {
      const { data } = await ClientAxios.put<SetIsActiveResponse>(
        `${SET_IS_ACTIVE}/${_id}`,
      );

      dispatch({ type: ActionTypes.SET_IS_NOT_UPDATING });

      return dispatch<SetSuccessAction>({
        type: ActionTypes.SET_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 400) {
          window.location.href = VIEW_LOGIN;
        }
        dispatch({ type: ActionTypes.SET_IS_NOT_UPDATING });

        dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
      dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

      dispatch<SetPositionErrorAction>({
        type: ActionTypes.SET_POSITION_ERROR,
        payload: error,
      });
    }
  };
}

export function ClearErrors(dispatch: Dispatch) {
  return dispatch<CleanPositionErrorAction>({
    type: ActionTypes.CLEAN_POSITION_ERROR,
  });
}

export function ClearSuccess(dispatch: Dispatch) {
  return dispatch<ClearSuccessAction>({
    type: ActionTypes.CLEAR_SUCCESS,
  });
}

export function DeletePosition(_id: string) {
  return async function (dispatch: Dispatch) {
    dispatch({ type: ActionTypes.SET_IS_UPDATING });

    try {
      const { data } = await PrivateAxios.delete<DeletePositionResponse>(
        `${DELETE_POSITION}/${_id}`,
      );

      dispatch({ type: ActionTypes.SET_IS_NOT_UPDATING });

      return dispatch<SetSuccessAction>({
        type: ActionTypes.SET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 400) {
          window.location.href = VIEW_LOGIN;
        }
        dispatch({ type: ActionTypes.SET_IS_NOT_UPDATING });

        dispatch<SetPositionErrorAction>({
          type: ActionTypes.SET_POSITION_ERROR,
          payload: error.response.data,
        });
      }
      dispatch<SetLoadingAction>({ type: ActionTypes.SET_IS_NOT_LOADING });

      dispatch<SetPositionErrorAction>({
        type: ActionTypes.SET_POSITION_ERROR,
        payload: error,
      });
    }
  };
}
