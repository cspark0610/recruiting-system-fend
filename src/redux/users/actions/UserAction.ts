import { Dispatch } from 'redux';
import { ActionTypes } from '../types/index';
import { GetUsersResponse, LoginUserResponse } from '../types/axiosResponses';
import {
  GetUsersActions,
  SetUserErrorAction,
  SetUserInfoAction,
  SetUserLoadingAction,
  SetUserSuccessAction,
} from '../types/dispatchActions';
import ClientAxios, { PrivateAxios } from '../../../config/api/axios';
import {
  GET_ALL_USERS,
  LOGIN_USER,
  LOGOUT_USER,
} from '../../../config/routes/endpoints';
import { VIEW_LOGIN } from '../../../config/routes/paths';
import cleanLocalStorage from '../../../utils/cleanLocalStorage';
import setLocalStorage from '../../../utils/setLocalStorage';

export function GetAllUsers() {
  return async (dispatch: Dispatch) => {
    dispatch<SetUserLoadingAction>({
      type: ActionTypes.SET_IS_USER_LOADING,
    });

    try {
      const { data } = await PrivateAxios.get<GetUsersResponse>(GET_ALL_USERS);

      dispatch<SetUserLoadingAction>({
        type: ActionTypes.SET_IS_USER_NOT_LOADING,
      });

      return dispatch<GetUsersActions>({
        type: ActionTypes.GET_USERS,
        payload: data.users,
      });
    } catch (error: any) {
      if (error.response) {
        dispatch({ type: ActionTypes.SET_IS_USER_NOT_LOADING });
        dispatch<SetUserErrorAction>({
          type: ActionTypes.SET_USER_ERROR,
          payload: error.response.data,
        });
      }
      dispatch<SetUserLoadingAction>({
        type: ActionTypes.SET_IS_USER_NOT_LOADING,
      });
      dispatch<SetUserErrorAction>({
        type: ActionTypes.SET_USER_ERROR,
        payload: error,
      });
    }
  };
}

export function Login(
  userInfo: { email?: string; password?: string; tokenId?: string },
  googleLogin?: boolean,
) {
  return async function (dispatch: Dispatch) {
    dispatch<SetUserLoadingAction>({ type: ActionTypes.SET_IS_USER_LOADING });

    try {
      const { data } = await ClientAxios.post<LoginUserResponse>(LOGIN_USER, {
        email: userInfo.email,
        password: userInfo.password,
        tokenId: userInfo.tokenId,
        googleLogin,
      });

      dispatch<SetUserLoadingAction>({
        type: ActionTypes.SET_IS_USER_NOT_LOADING,
      });

      setLocalStorage('access', data.access_token);
      setLocalStorage('user', JSON.stringify(data.user));

      dispatch<SetUserSuccessAction>({
        type: ActionTypes.SET_USER_SUCCESS,
        payload: {
          status: 200,
          message: 'Login Successful',
        },
      });

      return dispatch<SetUserInfoAction>({
        type: ActionTypes.SET_USER_INFO,
        payload: data.user,
      });
    } catch (error: any) {
      if (error.response) {
        dispatch({ type: ActionTypes.SET_IS_USER_NOT_LOADING });
        dispatch<SetUserErrorAction>({
          type: ActionTypes.SET_USER_ERROR,
          payload: error.response.data,
        });
      }
    }
  };
}

export function LogOut() {
  return async function (dispatch: Dispatch) {
    cleanLocalStorage();

    await PrivateAxios.post(LOGOUT_USER, {});

    window.location.href = VIEW_LOGIN;

    dispatch<SetUserSuccessAction>({
      type: ActionTypes.SET_USER_SUCCESS,
      payload: {
        status: 200,
        message: 'Logout Successful',
      },
    });
  };
}
