import { IPosition, IQuestion } from "../../positions/types/data";

export type IConclusionInv = {
	comment: string;
	context: string;
	user: {
		_id: string;
		name: string;
		email: string;
		picture?: string;
	};
};

export type IConclusions = {
	good: Array<IConclusionInv>;
	bad: Array<IConclusionInv>;
};

export type IVideoRecordingUrl = {
	_id: string;
	short_url: string;
	expiresAt: Date | undefined;
};

export type IPostulation = {
	_id?: string;
	position: IPosition;
	salary_expectations?: string;
	skills?: Array<string>;
	linkedin?: string;
	portfolio?: string;
	working_reason?: string;
	main_status: string;
	secondary_status: string;
	video_recording_url?: IVideoRecordingUrl;
	videos_question_list?: Array<IQuestion>;
	url_link_2?: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export type ICandidate = {
	_id?: string;
	name: string;
	email: string;
	phone: number;
	country: string;
	academic_training?: string;
	//salary_expectations?: string;
	available_from?: Date;
	english_level: string;
	//skills?: Array<string>;
	//linkedin?: string;
	//portfolio?: string;
	//working_reason?: string;
	birth_date?: string;
	conclusions?: IConclusions;
	//main_status?: string;
	//secondary_status?: string;
	postulations?: Array<IPostulation>;
	position: IPosition;
	designated_recruiters?: Array<string>;
	//video_recording_url?: IVideoRecordingUrl;
	//videos_question_list?: Array<IQuestion>;
	cv?: string;
	isRejected?: boolean;
	//url_link_2: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export type IError = {
	status: number;
	message: string;
};

export type Filters = {
	position: Array<string>;
	status: Array<string>;
	query: string;
};
