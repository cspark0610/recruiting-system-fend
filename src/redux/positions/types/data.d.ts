export type IPosition = {
	_id?: string
	title?: string
	designated?: Array<string>
	client_name?: string
	rie_link?: string
	recruiter_filter?: string
	url?: string
	priority?: string
	isActive?: boolean
	skills_required?: Array<string>
	video_questions_list?: Array<IQuestion>
}

export type IQuestion = {
	_id: string
	question_id: number
	question_title: string
	video_key: string
}

export type IErrorPosition = {
	status: number
	message: string | string[]
}
