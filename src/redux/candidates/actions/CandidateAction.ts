import { Dispatch } from 'redux';
import axios from 'axios';

import { ActionTypes } from '../types/index';
import {
  GetCandidatesAction,
  GetCandidatesResponse,
} from '../reducers/interfaces.interface';

import {
  ADD_CANDIDATE,
  ADD_CANDIDATE_SUCCESS,
  ADD_CANDIDATE_ERROR,
  GET_ID,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  GET_DATA_EDIT,
  DATA_EDIT,
  DATA_EDIT_SUCCESS,
  DATA_EDIT_ERROR,
} from './../types';
import ClientAxios from '../../../config/api/axios';

export function GetAllCandidates() {
  return async function (dispatch: Dispatch) {
    const { data } = await axios.get<GetCandidatesResponse>(
      'https://fulltimeforce-video-interview.herokuapp.com/candidate',
    );

    return dispatch<GetCandidatesAction>({
      type: ActionTypes.GET_CANDIDATES,
      payload: data.allCandidates,
    });
  };
}

export function AddCandidate(user: any) {
  return async (dispatch: any) => {
    dispatch(AddCandidateLoad(true));

    try {
      const {
        data: { id },
      } = await ClientAxios.post('/candidates', user);
      dispatch(AddCandidateSuccess(user));
      dispatch(GetID(id));
    } catch (error) {
      dispatch(AddCandidateError(true));
    }
  };
}

const AddCandidateLoad = (status: boolean) => ({
  type: ADD_CANDIDATE,
  payload: status,
});

const AddCandidateSuccess = (user: any) => ({
  type: ADD_CANDIDATE_SUCCESS,
  payload: user,
});

const AddCandidateError = (status: boolean) => ({
  type: ADD_CANDIDATE_ERROR,
  payload: status,
});

/* HELPER TO GET ID */
const GetID = (id: number) => ({
  type: GET_ID,
  payload: id,
});

/* FUNCTION TO GET DATA FROM DATABASE */
export function GetData(id: number) {
  return async (dispatch: any) => {
    dispatch(GetDataLoad(true));
    try {
      const response = await ClientAxios.get(`/candidates/${id}`);
      dispatch(GetDataSuccess(response.data));
    } catch (error) {
      dispatch(GetDataError(true));
    }
  };
}

const GetDataLoad = (status: boolean) => ({
  type: GET_DATA,
  payload: status,
});

const GetDataSuccess = (user: any) => ({
  type: GET_DATA_SUCCESS,
  payload: user,
});

const GetDataError = (status: boolean) => ({
  type: GET_DATA_ERROR,
  payload: status,
});

/* FUNCTION TO GET DATA IN THE FORM TO EDIT */
export function DataEdit(user: any) {
  return (dispatch: any) => {
    dispatch(GetDataEdit(user));
  };
}

const GetDataEdit = (user: any) => ({
  type: GET_DATA_EDIT,
  payload: user,
});

/* FUNCTION TO SAVE EDIT */
export function DataSaveEdit(user: any) {
  return async (dispatch: any) => {
    dispatch(DataEditLoad(true));

    try {
      ClientAxios.put(`/candidates/${user.id}`, user);
      dispatch(DataEditSuccess(user));
    } catch (error) {
      dispatch(DataEditError(true));
    }
  };
}

const DataEditLoad = (status: boolean) => ({
  type: DATA_EDIT,
  payload: status,
});

const DataEditSuccess = (user: any) => ({
  type: DATA_EDIT,
  payload: user,
});

const DataEditError = (status: boolean) => ({
  type: DATA_EDIT,
  payload: status,
});
