import { ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR } from "../types/index";
import clientAxios from "../config/axios";

export function AddNewUser(user: {
  name: string;
  email: string;
  phone: string;
  idiom: string;
  nation: string;
  linkedin: string;
  portfolio: string;
  resume: any;
  terms: boolean;
}) {
  return async (dispatch: any) => {
    dispatch(AddUser(true));

    try {
      await clientAxios.post("/users", user);
      dispatch(AddUserSuccess(user));
    } catch (error) {
      dispatch(AddUserError(true));
    }
  };
}

const AddUser = (status: boolean) => ({
  type: ADD_USER,
  payload: status,
});

const AddUserSuccess = (user: {
  name: string;
  email: string;
  phone: string;
  idiom: string;
  nation: string;
  linkedin: string;
  portfolio: string;
  resume: any;
  terms: boolean;
}) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

const AddUserError = (status: boolean) => ({
  type: ADD_USER_ERROR,
  payload: status,
});
