import { ActionTypes } from '../types'
import {
	SetCandidateErrorAction,
	SetCandidateLoadingAction,
} from '../types/dispatchActions'

export function handleErrorsInCatch(
	error: any,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	dispatch: <T>(arg0: { type: ActionTypes; payload?: any }) => void,
) {
	if (error.response) {
		dispatch<SetCandidateLoadingAction>({
			type: ActionTypes.SET_IS_NOT_CANDIDATE_LOADING,
		})

		return dispatch<SetCandidateErrorAction>({
			type: ActionTypes.SET_CANDIDATE_ERROR,
			payload: error.response.data,
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

export function handleErrorsInCatchNoLoading(
	error: any,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	dispatch: <T>(arg0: { type: ActionTypes; payload?: any }) => void,
) {
	if (error.response) {
		return dispatch<SetCandidateErrorAction>({
			type: ActionTypes.SET_CANDIDATE_ERROR,
			payload: error.response.data,
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

export function handleErrorsInCatchCandidateUpdating(
	error: any,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	dispatch: <T>(arg0: { type: ActionTypes; payload?: any }) => void,
) {
	if (error.response) {
		dispatch<SetCandidateLoadingAction>({
			type: ActionTypes.SET_IS_NOT_CANDIDATE_UPDATING,
		})

		return dispatch<SetCandidateErrorAction>({
			type: ActionTypes.SET_CANDIDATE_ERROR,
			payload: error.response.data,
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
