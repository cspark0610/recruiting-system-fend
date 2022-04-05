import { ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR } from "../types";
import ClientAxios from "../../../config/api/axios";

export function AddUser(user: any) {
  return async (dispatch: any) => {
    dispatch(AddUserLoad(true));

    try {
      await ClientAxios.post("/users", user);
      dispatch(AddUserSuccess(user));
    } catch (error) {
      dispatch(AddUserError(true));
    }
  };
}

const AddUserLoad = (status: boolean) => ({
  type: ADD_USER,
  payload: status,
});

const AddUserSuccess = (user: any) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

const AddUserError = (status: boolean) => ({
  type: ADD_USER_ERROR,
  payload: status,
});