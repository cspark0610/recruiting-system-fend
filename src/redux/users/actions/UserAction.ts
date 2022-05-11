import { Dispatch } from "redux";
import { ActionTypes } from "../types/index";
import { GetUsersResponse } from "../types/axiosResponses";
import {
  GetUsersActions,
  SetUserErrorAction,
  SetUserLoadingAction,
} from "../types/dispatchActions";
import ClientAxios from "../../../config/api/axios";
import { GET_ALL_USERS } from "../../../config/routes/endpoints";

export function GetAllUsers() {
  return async (dispatch: Dispatch) => {
    dispatch<SetUserLoadingAction>({
      type: ActionTypes.SET_IS_USER_LOADING,
    });

    try {
      const { data } = await ClientAxios.get<GetUsersResponse>(GET_ALL_USERS);

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
