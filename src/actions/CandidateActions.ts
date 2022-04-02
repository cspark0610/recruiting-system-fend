import {
  ADD_CANDIDATE,
  ADD_CANDIDATE_SUCCESS,
  ADD_CANDIDATE_ERROR,
  GET_DATA_LISTED,
  GET_DATA_LISTED_SUCCESS,
  GET_DATA_LISTED_ERROR,
  SET_USER_ID,
  GET_DATA_EDIT,
  DATA_EDITED_SUCCESS,
  DATA_EDITED_ERROR,
  START_DATA_EDIT,
} from "../types/index";

import clientAxios from "../config/axios";

/* FUNCTION TO ADD INFORMATION FROM A USER */
export function AddNewCandidate(user: {
  college: string;
  salary: number;
  available: string;
  skill: string;
  description: string;
}) {
  return async (dispatch: any) => {
    dispatch(AddCandidate());

    try {
      const {
        data: { id },
      } = await clientAxios.post("/candidates", user);
      dispatch(SetId(id));
      dispatch(AddCandidateSuccess(user));
    } catch (error) {
      dispatch(AddCandidateError(true));
    }
  };
}

const AddCandidate = () => ({
  type: ADD_CANDIDATE,
});

const AddCandidateSuccess = (user: {
  college: string;
  salary: number;
  available: string;
  skill: string;
  description: string;
}) => ({
  type: ADD_CANDIDATE_SUCCESS,
  payload: user,
});

const AddCandidateError = (status: boolean) => ({
  type: ADD_CANDIDATE_ERROR,
  payload: status,
});

/* GET USER ID */
const SetId = (id: number) => ({
  type: SET_USER_ID,
  payload: id,
});

/* FUNCTION TO LIST DATA FROM A USER */
export function DataListedUser(id: number) {
  return async (dispatch: any) => {
    dispatch(DataListed());
    try {
      const response = await clientAxios.get(`/candidates/${id}`);
      dispatch(DataListedSuccess(response.data));
    } catch (error) {
      dispatch(DataListedError());
    }
  };
}

const DataListed = () => ({
  type: GET_DATA_LISTED,
  payload: true,
});

const DataListedSuccess = (user: any) => ({
  type: GET_DATA_LISTED_SUCCESS,
  payload: user,
});

const DataListedError = () => ({
  type: GET_DATA_LISTED_ERROR,
  payload: true,
});

export function UserDataEdit(user: any) {
  return (dispatch: any) => {
    dispatch(GetInfoEdit(user));
  };
}

const GetInfoEdit = (user: any) => ({
  type: GET_DATA_EDIT,
  payload: user,
});

/* EDIT AN INFORMATION ON THE API AND STATE */
export function EditUserAction(user: any, id: number) {
  return async (dispatch: any) => {
    dispatch(EditUser(user));
    try {
      const response = await clientAxios.put(`/candidates/${id}`, user);
    } catch (error) {}
  };
}

const EditUser = (user: any) => ({
  type: START_DATA_EDIT,
  payload: user,
});
