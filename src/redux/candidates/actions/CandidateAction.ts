import { Dispatch } from 'redux';
import axios from 'axios';

import { ActionTypes } from '../types/index';
import {
  GetCandidatesFilteredResponse,
  GetCandidatesResponse,
} from '../types/axiosResponses';
import {
  GetCandidatesAction,
  GetCandidatesFilteredAction,
} from '../types/dispatchActions';

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

const PROD_URL =
  'https://fulltimeforce-video-interview.herokuapp.com/candidate';

const DEV_URL = 'http://localhost:3001/candidate';

const ENV = 'development';

export function GetAllCandidates() {
  return async function (dispatch: Dispatch) {
    dispatch({ type: ActionTypes.SET_IS_LOADING });

    try {
      const { data } = await axios.get<GetCandidatesResponse>(
        ENV === 'development' ? DEV_URL : PROD_URL,
      );

      dispatch({ type: ActionTypes.SET_IS_NOT_LOADING });

      return dispatch<GetCandidatesAction>({
        type: ActionTypes.GET_CANDIDATES,
        payload: data.allCandidates,
      });
    } catch (error) {
      if (error.response) {
        dispatch({ type: ActionTypes.SET_IS_NOT_LOADING });
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload: error.response.data,
        });
      }
    }
  };
}

export function GetCandidatesFiltered(
  position?: string[],
  secondary_status?: string[],
  query?: string,
) {
  return async function (dispatch: Dispatch) {
    const requestBody = JSON.stringify({
      position,
      secondary_status,
      query,
    });

    dispatch({ type: ActionTypes.SET_IS_LOADING });

    try {
      const { data } = await axios.post<GetCandidatesFilteredResponse>(
        'http://localhost:3001/candidate/filter',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      dispatch({ type: ActionTypes.SET_IS_NOT_LOADING });

      return dispatch<GetCandidatesFilteredAction>({
        type: ActionTypes.GET_CANDIDATES_FILTERED,
        payload: data.candidatesFiltered,
      });
    } catch (error) {
      if (error.response) {
        dispatch({ type: ActionTypes.SET_IS_NOT_LOADING });
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload: error.response.data,
        });
      }
    }
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

export function CleanErrors() {
  return function (dispatch: Dispatch) {
    return dispatch({
      type: ActionTypes.CLEAN_ERROR,
    });
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
