import { ActionTypes } from './actionNames'
import { IError, IPosition } from './data'

export type GetAllPositionsAction = {
	type: ActionTypes.GET_ALL_POSITIONS
	payload: {
		docs: IPosition[]
		totalDocs: number
		limit: number
		hasNextPage: boolean
		nextPage: number
		totalPages: number
		page: number
		prevPage: number
		hasPrevPage: boolean
		pagingCounter: number
		offset: number
	}
}

export type GetActivePositionsAction = {
	type: ActionTypes.GET_ACTIVE_POSITIONS
	payload: {
		docs: IPosition[]
		totalDocs: number
		limit: number
		hasNextPage: boolean
		nextPage: number
		totalPages: number
		page: number
		prevPage: number
		hasPrevPage: boolean
		pagingCounter: number
		offset: number
	}
}

export type GetInactivePositionsAction = {
	type: ActionTypes.GET_INACTIVE_POSITIONS
	payload: {
		docs: IPosition[]
		totalDocs: number
		limit: number
		hasNextPage: boolean
		nextPage: number
		totalPages: number
		page: number
		prevPage: number
		hasPrevPage: boolean
		pagingCounter: number
		offset: number
	}
}

export type GetPositionInfoAction = {
	type: ActionTypes.GET_POSITION_INFO
	payload: IPosition
}

export type UpdateInfoAction = {
	type: ActionTypes.UPDATE_INFO
	payload: IPosition
}

export type CreatePositionAction = {
	type: ActionTypes.CREATE_POSITION
	payload: IPosition
}

export type SetIsActivePositionAction = {
	type: ActionTypes.SET_IS_ACTIVE
}

export type SetIsPositionUpdatingAction = {
	type:
		| ActionTypes.SET_IS_UPDATING
		| ActionTypes.SET_IS_NOT_UPDATING
}

export type SetSuccessAction = {
	type: ActionTypes.SET_SUCCESS
	payload: {
		status: number
		message: string
	}
}

export type ClearSuccessAction = {
	type: ActionTypes.CLEAR_SUCCESS
}

export type ClearInfoAction = {
	type: ActionTypes.CLEAR_INFO
}

export type SetLoadingAction = {
	type:
		| ActionTypes.SET_IS_LOADING
		| ActionTypes.SET_IS_NOT_LOADING
}

export type SetPositionErrorAction = {
	type: ActionTypes.SET_POSITION_ERROR
	payload: IError
}

export type CleanPositionErrorAction = {
	type: ActionTypes.CLEAN_POSITION_ERROR
}

export type Action =
	| GetAllPositionsAction
	| ClearInfoAction
	| GetActivePositionsAction
	| GetInactivePositionsAction
	| UpdateInfoAction
	| GetPositionInfoAction
	| CreatePositionAction
	| SetPositionErrorAction
	| CleanPositionErrorAction
	| SetLoadingAction
	| SetIsActivePositionAction
	| SetSuccessAction
	| ClearSuccessAction
	| SetIsPositionUpdatingAction
