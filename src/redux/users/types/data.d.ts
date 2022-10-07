export type IUser = {
	_id?: string
	name: string
	email: string
	password?: string
	position_name?: string
	phone?: string
	role?: {
		_id?: string
		name: string
	}
}

export type IError = {
	status: number
	message: string
}

export type ISuccess = {
	status: number
	message: string
}
