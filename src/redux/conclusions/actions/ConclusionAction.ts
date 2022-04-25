import {
  ADD_CONCLUSION,
  ADD_CONCLUSION_SUCCESS,
  ADD_CONCLUSION_ERROR,
  GET_ID_CONCLUSION,
  GET_CONCLUSION,
  GET_CONCLUSION_SUCCESS,
  GET_CONCLUSION_ERROR,
} from "../types";

import { POST_FEED } from "../../../config/routes/endpoints";

import ClientAxios from "../../../config/api/axios";

export function AddConclusion(feed: any) {
  return async (dispatch: any) => {
    dispatch(AddConclusionLoad(true));
    try {
      const {
        data: { id },
      } = await ClientAxios.post(POST_FEED, feed);
      dispatch(AddConclusionSuccess(feed));
      dispatch(GetID(id));
    } catch (error) {
      dispatch(AddConclusionError(true));
    }
  };
}

const AddConclusionLoad = (status: boolean) => ({
  type: ADD_CONCLUSION,
  payload: status,
});

const AddConclusionSuccess = (feed: any) => ({
  type: ADD_CONCLUSION_SUCCESS,
  payload: feed,
});

const AddConclusionError = (status: boolean) => ({
  type: ADD_CONCLUSION_ERROR,
  payload: status,
});

/* HELPER TO GET ID */
const GetID = (id: number) => ({
  type: GET_ID_CONCLUSION,
  payload: id,
});

/* FUNCTION TO GET DATA FROM DATABASE */
export function GetConclusion() {
  return async (dispatch: any) => {
    dispatch(GetConclusionLoad(true));
    try {
      const response = await ClientAxios.get(POST_FEED);
      dispatch(GetConclusionSuccess(response.data));
    } catch (error) {
      dispatch(GetConclusionError(true));
    }
  };
}

const GetConclusionLoad = (status: boolean) => ({
  type: GET_CONCLUSION,
  payload: status,
});

const GetConclusionSuccess = (feed: any) => ({
  type: GET_CONCLUSION_SUCCESS,
  payload: feed,
});

const GetConclusionError = (status: boolean) => ({
  type: GET_CONCLUSION_ERROR,
  payload: status,
});
