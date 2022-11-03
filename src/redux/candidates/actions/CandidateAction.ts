import { Dispatch } from 'redux'

import { ActionTypes } from '../types/index'

import {
	CreateCandidateResponse,
	GetCandidateInfoResponse,
	GetCandidatesFilteredResponse,
	GetPostulationInfoResponse,
	// GetCandidatesResponse,
	UpdateCandidateConclusionResponse,
	UpdateCandidateEmploymentStatusResponse,
	UpdateCandidateStatusResponse,
	ValidateTokenResponse,
} from '../types/axiosResponses'

import {
	CreateCandidateAction,
	GetCandidatesAction,
	GetCandidatesFilteredAction,
	SetCandidateErrorAction,
	ClearCandidateErrorAction,
	GetCandidateInfoAction,
	SetCurrentFiltersAction,
	CleanFiltersAction,
	CleanFiltersExpertAction,
	ClearCandidateDetailAction,
	SetDetailFinishedLoadingAction,
	CleanCandidateSuccessAction,
	SetCandidateSuccessAction,
	SetUpdatingCandidateAction,
	SetCandidateLoadingAction,
	ValidateTokenAction,
	UpdateCandidateConclusionAction,
	UpdateCandidateStatusAction,
	//UpdateCandidateInfoAction,
	SetToEditInfoAction,
	GetVideoAction,
	SetCurrentFiltersExpertAction,
	GetCandidatesFilteredExpertAction,
	UpdatePostulationInfoAction,
	UpdateCandidateInfoAction,
	UpdateCandidateEmploymentStatusAction,
	AddNewPostulationToCandidateAction,
	GetPostulationAction,
} from '../types/dispatchActions'

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
} from './../types'
import {
	CREATE_CANDIDATE,
	GENERATE_URL,
	GET_ALL_CANDIDATES,
	GET_ALL_CANDIDATES_FILTERED,
	POST_CANDIDATE,
	UPDATE_CONCLUSION,
	UPDATE_STATUS,
	VALIDATE_TOKEN,
	SEND_VIDEO,
	REJECT_CANDIDATE,
	GET_VIDEO,
	GET_ALL_CANDIDATES_FILTERED_EXPERT,
	UPDATE_POSTULATION_INFO,
	UPDATE_CANDIDATE_INFO,
	UPDATE_CANDIDATE_EMPLOYMENT_STATUS,
	ADD_POSTULATION_TO_CANDIDATE,
	GET_ALL_POSTULATIONS,
} from '../../../config/routes/endpoints'
import ClientAxios, { PrivateAxios } from '../../../config/api/axios'
import { Filters, FiltersExpert, IConclusionInv, IPostulation } from '../types/data'
// import { IError } from "../../users/types/data";
import {
	handleErrorsInCatch,
	handleErrorsInCatchCandidateUpdating,
	handleErrorsInCatchNoLoading,
} from '../errors/candidate.actions.handleError'

export function GetAllCandidates() {
	return async function (dispatch: Dispatch) {
		dispatch<SetCandidateLoadingAction>({
			type: ActionTypes.SET_IS_CANDIDATE_LOADING,
		})

		try {
			const { data } = await PrivateAxios.get(GET_ALL_CANDIDATES)

			dispatch<SetCandidateLoadingAction>({
				type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
			})

			return dispatch<GetCandidatesAction>({
				type: ActionTypes.GET_CANDIDATES,
				payload: data.allCandidates,
			})
		} catch (error: any) {
			handleErrorsInCatch(error, dispatch)
		}
	}
}

export function GetCandidateInfo(_id: string) {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await PrivateAxios.get<GetCandidateInfoResponse>(
				`${GET_ALL_CANDIDATES}/${_id}`,
			)

			dispatch<SetDetailFinishedLoadingAction>({
				type: ActionTypes.SET_DETAIL_FINISHED_LOADING,
			})

			return dispatch<GetCandidateInfoAction>({
				type: ActionTypes.GET_CANDIDATE_DETAIL,
				payload: data.candidate,
			})
		} catch (error: any) {
			handleErrorsInCatch(error, dispatch)
		}
	}
}
export function GetPostulationById(_id: string) {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await PrivateAxios.get<GetPostulationInfoResponse>(
				`${GET_ALL_POSTULATIONS}/${_id}`,
			)

			return dispatch<GetPostulationAction>({
				type: ActionTypes.GET_POSTULATION,
				payload: data.postulation,
			})
		} catch (error: any) {
			handleErrorsInCatch(error, dispatch)
		}
	}
}

export function ClearCandidateDetail(dispatch: Dispatch) {
	dispatch<SetDetailFinishedLoadingAction>({
		type: ActionTypes.SET_DETAIL_FINISHED_LOADING,
	})

	return dispatch<ClearCandidateDetailAction>({
		type: ActionTypes.CLEAR_CANDIDATE_DETAIL,
	})
}

export function GetCandidatesFiltered(filters: Filters) {
	return async function (dispatch: Dispatch) {
		dispatch<SetCandidateLoadingAction>({
			type: ActionTypes.SET_IS_CANDIDATE_LOADING,
		})

		try {
			const { data } = await PrivateAxios.post<GetCandidatesFilteredResponse>(
				GET_ALL_CANDIDATES_FILTERED,
				filters,
			)

			dispatch<SetCandidateLoadingAction>({
				type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
			})

			dispatch<SetCurrentFiltersAction>({
				type: ActionTypes.SET_CURRENT_FILTERS,
				payload: {
					position: filters.position,
					status: filters.status,
					query: filters.query,
				},
			})

			return dispatch<GetCandidatesFilteredAction>({
				type: ActionTypes.GET_CANDIDATES_FILTERED,
				payload: data.candidatesFiltered,
			})
		} catch (error: any) {
			if (error.response) {
				dispatch<SetCandidateLoadingAction>({
					type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
				})

				dispatch<SetCandidateErrorAction>({
					type: ActionTypes.SET_CANDIDATE_ERROR,
					payload: error.response.data,
				})

				return dispatch<SetCurrentFiltersAction>({
					type: ActionTypes.SET_CURRENT_FILTERS,
					payload: {
						position: filters.position,
						status: filters.status,
						query: filters.query,
					},
				})
			} else {
				dispatch<SetCandidateLoadingAction>({
					type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
				})
				return dispatch<SetCandidateErrorAction>({
					type: ActionTypes.SET_CANDIDATE_ERROR,
					payload: error,
				})
			}
		}
	}
}

export function GetCandidatesFilteredExpert(filters: FiltersExpert) {
	return async function (dispatch: Dispatch) {
		dispatch<SetCandidateLoadingAction>({
			type: ActionTypes.SET_IS_CANDIDATE_LOADING,
		})

		try {
			const { data } = await PrivateAxios.post(
				GET_ALL_CANDIDATES_FILTERED_EXPERT,
				filters,
			)

			dispatch<SetCandidateLoadingAction>({
				type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
			})

			dispatch<SetCurrentFiltersExpertAction>({
				type: ActionTypes.SET_CURRENT_FILTERS_EXPERT,
				payload: {
					candidate_name: filters.candidate_name,
					skills: filters.skills,
					employment_status: filters.employment_status,
				},
			})

			return dispatch<GetCandidatesFilteredExpertAction>({
				type: ActionTypes.GET_CANDIDATES_FILTERED_EXPERT,
				payload: data.candidatesFiltered,
			})
		} catch (error: any) {
			if (error.response) {
				dispatch<SetCandidateLoadingAction>({
					type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
				})

				dispatch<SetCandidateErrorAction>({
					type: ActionTypes.SET_CANDIDATE_ERROR,
					payload: error.response.data,
				})

				return dispatch<SetCurrentFiltersExpertAction>({
					type: ActionTypes.SET_CURRENT_FILTERS_EXPERT,
					payload: {
						candidate_name: filters.candidate_name,
						skills: filters.skills,
						employment_status: filters.employment_status,
					},
				})
			} else {
				dispatch<SetCandidateLoadingAction>({
					type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
				})
				return dispatch<SetCandidateErrorAction>({
					type: ActionTypes.SET_CANDIDATE_ERROR,
					payload: error,
				})
			}
		}
	}
}

export function CreateCandidate(candidateInfo: any) {
	return async (dispatch: Dispatch) => {
		try {
			dispatch<SetCandidateLoadingAction>({
				type: ActionTypes.SET_IS_CANDIDATE_LOADING,
			})

			const { data } = await ClientAxios.post<CreateCandidateResponse>(
				CREATE_CANDIDATE,
				candidateInfo,
			)

			dispatch<SetCandidateLoadingAction>({
				type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
			})

			dispatch<SetCandidateSuccessAction>({
				type: ActionTypes.SET_CANDIDATE_SUCCESS,
				payload: {
					status: 201,
					message: 'Created successfully',
				},
			})

			return dispatch<CreateCandidateAction>({
				type: ActionTypes.CREATE_CANDIDATE,
				payload: data.candidate,
			})
		} catch (error: any) {
			handleErrorsInCatch(error, dispatch)
		}
	}
}

export function GenerateUrl(_id: string) {
	return async function (dispatch: Dispatch) {
		try {
			await PrivateAxios.post(`${GENERATE_URL}/${_id}`)
		} catch (error) {
			handleErrorsInCatch(error, dispatch)
		}
	}
}

export function AddNewPostulationToCandidate(
	_id: string,
	newPostulationBody: Partial<IPostulation>,
) {
	return async function (dispatch: Dispatch) {
		try {
			const {
				data: { data },
			} = await PrivateAxios.put(`${ADD_POSTULATION_TO_CANDIDATE}/${_id}`, {
				...newPostulationBody,
			})

			return dispatch<AddNewPostulationToCandidateAction>({
				type: ActionTypes.ADD_POSTULATION_TO_CANDIDATE,
				payload: data,
			})
		} catch (error) {
			handleErrorsInCatch(error, dispatch)
		}
	}
}

export function RejectCandidate(_id: string) {
	return async function (dispatch: Dispatch) {
		try {
			await PrivateAxios.put(`${REJECT_CANDIDATE}/${_id}`)
		} catch (error) {
			handleErrorsInCatch(error, dispatch)
		}
	}
}

export function UpdatePostulationInfo(
	_id: string,
	newInfo: UpdatePostulationInfoAction['payload'],
) {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetCandidateLoadingAction>({
				type: ActionTypes.SET_IS_CANDIDATE_LOADING,
			})

			await ClientAxios.put(`${UPDATE_POSTULATION_INFO}/${_id}`, newInfo)

			dispatch<SetCandidateLoadingAction>({
				type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
			})

			dispatch<SetCandidateSuccessAction>({
				type: ActionTypes.SET_CANDIDATE_SUCCESS,
				payload: {
					status: 200,
					message: 'Updated successfully',
				},
			})

			return dispatch<UpdatePostulationInfoAction>({
				type: ActionTypes.UPDATE_POSTULATION_INFO,
				payload: newInfo,
			})
		} catch (error) {
			handleErrorsInCatch(error, dispatch)
		}
	}
}

export function UpdateCandidateInfo(
	_id: string,
	newInfo: UpdateCandidateInfoAction['payload'],
) {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetCandidateLoadingAction>({
				type: ActionTypes.SET_IS_CANDIDATE_LOADING,
			})

			await ClientAxios.put(`${UPDATE_CANDIDATE_INFO}/${_id}`, newInfo)

			dispatch<SetCandidateLoadingAction>({
				type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
			})

			dispatch<SetCandidateSuccessAction>({
				type: ActionTypes.SET_CANDIDATE_SUCCESS,
				payload: {
					status: 200,
					message: 'Candidate Updated successfully',
				},
			})

			return dispatch<UpdatePostulationInfoAction>({
				type: ActionTypes.UPDATE_POSTULATION_INFO,
				payload: newInfo,
			})
		} catch (error) {
			handleErrorsInCatch(error, dispatch)
		}
	}
}

export function AddCandidate(user: any) {
	return async (dispatch: any) => {
		dispatch(AddCandidateLoad(true))

		try {
			const {
				data: { id },
			} = await ClientAxios.post(POST_CANDIDATE, user)
			dispatch(AddCandidateSuccess(user))
			dispatch(GetID(id))
		} catch (error) {
			dispatch(AddCandidateError(true))
		}
	}
}

export function UpdateCandidateStatus(
	_id: string,
	main_status: string,
	secondary_status: string,
) {
	return async function (dispatch: Dispatch) {
		dispatch<SetUpdatingCandidateAction>({
			type: ActionTypes.SET_IS_CANDIDATE_UPDATING,
		})

		try {
			//  "/postulation/status/update"
			const { data } = await PrivateAxios.put<UpdateCandidateStatusResponse>(
				`${UPDATE_STATUS}/${_id}`,
				{
					main_status,
					secondary_status,
				},
			)

			dispatch<SetUpdatingCandidateAction>({
				type: ActionTypes.SET_IS_NOT_CANDIDATE_UPDATING,
			})

			dispatch<SetCandidateSuccessAction>({
				type: ActionTypes.SET_CANDIDATE_SUCCESS,
				payload: {
					status: data.status,
					message: data.message,
				},
			})

			return dispatch<UpdateCandidateStatusAction>({
				type: ActionTypes.UPDATE_STATUS,
				payload: {
					_id,
					main_status: data.main_status,
					secondary_status: data.secondary_status,
				},
			})
		} catch (error) {
			handleErrorsInCatchNoLoading(error, dispatch)
		}
	}
}

export function UpdateCandidateEmploymentStatus(_id: string, employment_status: string) {
	return async function (dispatch: Dispatch) {
		dispatch<SetUpdatingCandidateAction>({
			type: ActionTypes.SET_IS_CANDIDATE_UPDATING,
		})
		try {
			const { data } = await PrivateAxios.put<UpdateCandidateEmploymentStatusResponse>(
				`${UPDATE_CANDIDATE_EMPLOYMENT_STATUS}/${_id}`,
				{
					employment_status,
				},
			)

			dispatch<SetUpdatingCandidateAction>({
				type: ActionTypes.SET_IS_NOT_CANDIDATE_UPDATING,
			})

			dispatch<SetCandidateSuccessAction>({
				type: ActionTypes.SET_CANDIDATE_SUCCESS,
				payload: {
					status: data.status,
					message: data.employment_status,
				},
			})

			// va al reducer
			return dispatch<UpdateCandidateEmploymentStatusAction>({
				type: ActionTypes.UPDATE_CANDIDATE_EMPLOYMENT_STATUS,
				payload: {
					_id,
					employment_status: data.employment_status,
				},
			})
		} catch (error) {
			handleErrorsInCatchNoLoading(error, dispatch)
		}
	}
}

export function UpdateCandidateConclusion(
	_id: string,
	candidate: {
		good?: IConclusionInv
		bad?: IConclusionInv
	},
) {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetUpdatingCandidateAction>({
				type: ActionTypes.SET_IS_CANDIDATE_UPDATING,
			})

			await PrivateAxios.put<UpdateCandidateConclusionResponse>(
				`${UPDATE_CONCLUSION}/${_id}`,
				candidate,
			)

			dispatch<SetUpdatingCandidateAction>({
				type: ActionTypes.SET_IS_NOT_CANDIDATE_UPDATING,
			})

			return dispatch<UpdateCandidateConclusionAction>({
				type: ActionTypes.UPDATE_CONCLUSION,
				payload: candidate,
			})
		} catch (error: any) {
			handleErrorsInCatchCandidateUpdating(error, dispatch)
		}
	}
}

export function ValidateToken(token: string) {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await ClientAxios.post<ValidateTokenResponse>(
				`${VALIDATE_TOKEN}?token=${token}`,
			)

			return dispatch<ValidateTokenAction>({
				type: ActionTypes.VALIDATE_TOKEN,
				payload: data,
			})
		} catch (error: any) {
			if (error.response) {
				return dispatch<SetCandidateErrorAction>({
					type: ActionTypes.SET_CANDIDATE_ERROR,
					payload: error.response.data,
				})
			}
		}
	}
}

export function SendVideo(_id: string, formData: FormData) {
	return async function (dispatch: Dispatch) {
		try {
			await ClientAxios.post(`${SEND_VIDEO}/${_id}`, formData)
		} catch (error) {
			handleErrorsInCatchCandidateUpdating(error, dispatch)
		}
	}
}

export function GetVideo(video_key: string) {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await PrivateAxios.get(`${GET_VIDEO}/${video_key}`)

			dispatch<SetDetailFinishedLoadingAction>({
				type: ActionTypes.SET_DETAIL_FINISHED_LOADING,
			})

			return dispatch<GetVideoAction>({
				type: ActionTypes.GET_VIDEO,
				payload: data,
			})
		} catch (error) {
			handleErrorsInCatchCandidateUpdating(error, dispatch)
		}
	}
}

export function CleanCandidateErrors(dispatch: Dispatch) {
	return dispatch<ClearCandidateErrorAction>({
		type: ActionTypes.CLEAN_CANDIDATE_ERROR,
	})
}

export function CleanFilters(dispatch: Dispatch) {
	return dispatch<CleanFiltersAction>({
		type: ActionTypes.CLEAN_FILTERS,
	})
}

export function CleanFiltersExpert(dispatch: Dispatch) {
	return dispatch<CleanFiltersExpertAction>({
		type: ActionTypes.CLEAN_FILTERS_EXPERT,
	})
}

export function ClearCandidateSuccess(dispatch: Dispatch) {
	return dispatch<CleanCandidateSuccessAction>({
		type: ActionTypes.CLEAR_CANDIDATE_SUCCESS,
	})
}

export function SetToEditInfo(dispatch: Dispatch) {
	return dispatch<SetToEditInfoAction>({
		type: ActionTypes.SET_TO_EDIT_INFO,
	})
}

const AddCandidateLoad = (status: boolean) => ({
	type: ADD_CANDIDATE,
	payload: status,
})

const AddCandidateSuccess = (user: any) => ({
	type: ADD_CANDIDATE_SUCCESS,
	payload: user,
})

const AddCandidateError = (status: boolean) => ({
	type: ADD_CANDIDATE_ERROR,
	payload: status,
})

/* HELPER TO GET ID */
const GetID = (id: number) => ({
	type: GET_ID,
	payload: id,
})

/* FUNCTION TO GET DATA FROM DATABASE */
export function GetData(id: number) {
	return async (dispatch: any) => {
		dispatch(GetDataLoad(true))
		try {
			const response = await ClientAxios.get(`${POST_CANDIDATE}/${id}`)
			dispatch(GetDataSuccess(response.data))
		} catch (error) {
			dispatch(GetDataError(true))
		}
	}
}

const GetDataLoad = (status: boolean) => ({
	type: GET_DATA,
	payload: status,
})

const GetDataSuccess = (user: any) => ({
	type: GET_DATA_SUCCESS,
	payload: user,
})

const GetDataError = (status: boolean) => ({
	type: GET_DATA_ERROR,
	payload: status,
})

/* FUNCTION TO GET DATA IN THE FORM TO EDIT */
export function DataEdit(user: any) {
	return (dispatch: any) => {
		dispatch(GetDataEdit(user))
	}
}

const GetDataEdit = (user: any) => ({
	type: GET_DATA_EDIT,
	payload: user,
})

const DataEditLoad = (status: boolean) => ({
	type: DATA_EDIT,
	payload: status,
})

const DataEditSuccess = (user: any) => ({
	type: DATA_EDIT_SUCCESS,
	payload: user,
})

const DataEditError = (status: boolean) => ({
	type: DATA_EDIT_ERROR,
	payload: status,
})

/* FUNCTION TO SAVE EDIT */
export function DataSaveEdit(user: any, id: number) {
	return async (dispatch: any) => {
		dispatch(DataEditLoad(true))
		try {
			ClientAxios.put(`${POST_CANDIDATE}/${id}`, user)
			dispatch(DataEditSuccess(user))
		} catch (error) {
			dispatch(DataEditError(true))
		}
	}
}
