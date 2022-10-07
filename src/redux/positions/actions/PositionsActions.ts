import {
	CREATE_POSITION,
	DELETE_POSITION,
	GET_ALL_POSITIONS,
	SET_IS_ACTIVE,
	UPDATE_POSITION,
} from '../../../config/routes/endpoints'
import {
	CleanPositionErrorAction,
	ClearSuccessAction,
	CreatePositionAction,
	GetActivePositionsAction,
	GetAllPositionsAction,
	GetInactivePositionsAction,
	GetPositionInfoAction,
	SetIsPositionUpdatingAction,
	SetLoadingAction,
	SetPositionErrorAction,
	SetSuccessAction,
} from '../types/dispatchActions'
import {
	CreatePositionResponse,
	DeletePositionResponse,
	GetAllPositionsResponse,
	GetPositionResponse,
	SetIsActiveResponse,
	UpdatePositionResponse,
} from '../types/axiosResponses'

import { ActionTypes } from '../types/actionNames'
import { Dispatch } from 'redux'
import { IPosition } from '../types/data'
import { IUser } from '../../users/types/data'
import { PrivateAxios } from '../../../config/api/axios'
import store from '../../store/store'

export default function getAllPositions(list: string) {
	return async function (dispatch: Dispatch) {
		try {
			const { data } =
				await PrivateAxios.get<GetAllPositionsResponse>(
					`${GET_ALL_POSITIONS}?list=${list}`,
				)

			return dispatch<GetAllPositionsAction>({
				type: ActionTypes.GET_ALL_POSITIONS,
				payload: data.data,
			})
		} catch (error: any) {
			if (error.response) {
				dispatch<SetLoadingAction>({
					type: ActionTypes.SET_IS_NOT_LOADING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error.response.data,
				})
			}
		}
	}
}

export function GetActivePositions(
	limit: number,
	page?: number,
) {
	return async function (dispatch: Dispatch) {
		dispatch<SetLoadingAction>({
			type: ActionTypes.SET_IS_LOADING,
		})

		try {
			const { data } =
				await PrivateAxios.get<GetAllPositionsResponse>(
					`${GET_ALL_POSITIONS}?page=${page}&limit=${limit}&list=active`,
				)

			dispatch<SetLoadingAction>({
				type: ActionTypes.SET_IS_NOT_LOADING,
			})

			return dispatch<GetActivePositionsAction>({
				type: ActionTypes.GET_ACTIVE_POSITIONS,
				payload: data.data,
			})
		} catch (error: any) {
			if (error.response) {
				dispatch<SetLoadingAction>({
					type: ActionTypes.SET_IS_NOT_LOADING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error.response.data,
				})
			} else {
				dispatch<SetLoadingAction>({
					type: ActionTypes.SET_IS_NOT_LOADING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error,
				})
			}
		}
	}
}

export function GetInactivePositions(
	limit: number,
	page?: number,
) {
	return async function (dispatch: Dispatch) {
		dispatch<SetLoadingAction>({
			type: ActionTypes.SET_IS_LOADING,
		})

		try {
			const { data } =
				await PrivateAxios.get<GetAllPositionsResponse>(
					`${GET_ALL_POSITIONS}?page=${page}&limit=${limit}&list=inactive`,
				)

			dispatch<SetLoadingAction>({
				type: ActionTypes.SET_IS_NOT_LOADING,
			})

			return dispatch<GetInactivePositionsAction>({
				type: ActionTypes.GET_INACTIVE_POSITIONS,
				payload: data.data,
			})
		} catch (error: any) {
			if (error.response) {
				dispatch<SetLoadingAction>({
					type: ActionTypes.SET_IS_NOT_LOADING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error.response.data,
				})
			} else {
				dispatch<SetLoadingAction>({
					type: ActionTypes.SET_IS_NOT_LOADING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error,
				})
			}
		}
	}
}

export function getPositionInfo(_id: string) {
	return async function (dispatch: Dispatch) {
		dispatch<SetLoadingAction>({
			type: ActionTypes.SET_IS_LOADING,
		})

		try {
			const { data } =
				await PrivateAxios.get<GetPositionResponse>(
					`${GET_ALL_POSITIONS}/${_id}`,
				)

			dispatch<SetLoadingAction>({
				type: ActionTypes.SET_IS_NOT_LOADING,
			})

			return dispatch<GetPositionInfoAction>({
				type: ActionTypes.GET_POSITION_INFO,
				payload: data.positionInfo,
			})
		} catch (error: any) {
			if (error.response) {
				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error,
				})
			}
		}
	}
}

export function createPosition(positionInfo: IPosition) {
	return async function (dispatch: Dispatch) {
		dispatch<SetLoadingAction>({
			type: ActionTypes.SET_IS_LOADING,
		})

		try {
			const { data } =
				await PrivateAxios.post<CreatePositionResponse>(
					CREATE_POSITION,
					positionInfo,
				)

			dispatch<SetLoadingAction>({
				type: ActionTypes.SET_IS_NOT_LOADING,
			})

			dispatch<SetSuccessAction>({
				type: ActionTypes.SET_SUCCESS,
				payload: {
					status: 201,
					message: 'New Position Created',
				},
			})

			return dispatch<CreatePositionAction>({
				type: ActionTypes.CREATE_POSITION,
				payload: data.newPosition,
			})
		} catch (error: any) {
			if (error.response) {
				dispatch<SetLoadingAction>({
					type: ActionTypes.SET_IS_NOT_LOADING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error.response.data,
				})
			} else {
				dispatch<SetLoadingAction>({
					type: ActionTypes.SET_IS_NOT_LOADING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error,
				})
			}
		}
	}
}

export function UpdateInfo(
	_id: string,
	newInfo: IPosition,
) {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetIsPositionUpdatingAction>({
				type: ActionTypes.SET_IS_UPDATING,
			})

			await PrivateAxios.put<UpdatePositionResponse>(
				`${UPDATE_POSITION}/${_id}`,
				newInfo,
			)

			dispatch<SetIsPositionUpdatingAction>({
				type: ActionTypes.SET_IS_NOT_UPDATING,
			})

			dispatch<SetSuccessAction>({
				type: ActionTypes.SET_SUCCESS,
				payload: {
					status: 200,
					message: 'Edition Saved',
				},
			})

			const users = store.getState().user.users

			let newRecruiters = users.filter((user: IUser) =>
				newInfo.designated?.includes(user.name),
			)

			newRecruiters = newRecruiters.reduce(
				(prev: any, user: any) => {
					return [
						...prev,
						{ _id: user._id, name: user.name },
					]
				},
				[],
			)

			return dispatch({
				type: ActionTypes.UPDATE_INFO,
				payload: { ...newInfo, designated: newRecruiters },
			})
		} catch (error) {
			if (error.response) {
				dispatch<SetIsPositionUpdatingAction>({
					type: ActionTypes.SET_IS_NOT_UPDATING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error.response.data,
				})
			} else {
				dispatch<SetIsPositionUpdatingAction>({
					type: ActionTypes.SET_IS_NOT_UPDATING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error,
				})
			}
		}
	}
}

export function SetIsActive(_id: string) {
	return async function (dispatch: Dispatch) {
		dispatch<SetIsPositionUpdatingAction>({
			type: ActionTypes.SET_IS_UPDATING,
		})

		try {
			const { data } =
				await PrivateAxios.put<SetIsActiveResponse>(
					`${SET_IS_ACTIVE}/${_id}`,
				)

			dispatch<SetIsPositionUpdatingAction>({
				type: ActionTypes.SET_IS_NOT_UPDATING,
			})

			store.dispatch(GetActivePositions(6, 1))
			store.dispatch(GetInactivePositions(6, 1))

			return dispatch<SetSuccessAction>({
				type: ActionTypes.SET_SUCCESS,
				payload: data,
			})
		} catch (error: any) {
			if (error.response) {
				dispatch<SetIsPositionUpdatingAction>({
					type: ActionTypes.SET_IS_NOT_UPDATING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error.response.data,
				})
			} else {
				dispatch<SetIsPositionUpdatingAction>({
					type: ActionTypes.SET_IS_NOT_UPDATING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error,
				})
			}
		}
	}
}

export function ClearErrors(dispatch: Dispatch) {
	return dispatch<CleanPositionErrorAction>({
		type: ActionTypes.CLEAN_POSITION_ERROR,
	})
}

export function ClearSuccess(dispatch: Dispatch) {
	return dispatch<ClearSuccessAction>({
		type: ActionTypes.CLEAR_SUCCESS,
	})
}

export function ClearInfo(dispatch: Dispatch) {
	return dispatch({
		type: ActionTypes.CLEAR_INFO,
	})
}

export function DeletePosition(_id: string) {
	return async function (dispatch: Dispatch) {
		dispatch<SetIsPositionUpdatingAction>({
			type: ActionTypes.SET_IS_UPDATING,
		})

		try {
			const { data } =
				await PrivateAxios.delete<DeletePositionResponse>(
					`${DELETE_POSITION}/${_id}`,
				)

			dispatch<SetIsPositionUpdatingAction>({
				type: ActionTypes.SET_IS_NOT_UPDATING,
			})

			store.dispatch(GetActivePositions(6, 1))
			store.dispatch(GetInactivePositions(6, 1))

			return dispatch<SetSuccessAction>({
				type: ActionTypes.SET_SUCCESS,
				payload: data,
			})
		} catch (error) {
			if (error.response) {
				dispatch<SetIsPositionUpdatingAction>({
					type: ActionTypes.SET_IS_NOT_UPDATING,
				})

				dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error.response.data,
				})
			} else {
				dispatch<SetIsPositionUpdatingAction>({
					type: ActionTypes.SET_IS_NOT_UPDATING,
				})

				return dispatch<SetPositionErrorAction>({
					type: ActionTypes.SET_POSITION_ERROR,
					payload: error,
				})
			}
		}
	}
}
