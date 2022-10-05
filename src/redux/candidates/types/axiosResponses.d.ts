import { ICandidate, IConclusions } from "./data";

export type GetCandidatesResponse = {
	status: number;
	allCandidates: ICandidate[];
};

export type GetCandidateInfoResponse = {
	status: number;
	candidate: ICandidate;
};

export type GetPostulationInfoResponse = {
	status: number;
	postulation: IPostulation;
};

export type GetCandidatesFilteredResponse = {
	status: number;
	candidatesFiltered: ICandidate[];
};

export type GetCandidateDetail = {
	status: number;
	candidate: ICandidate;
};

export type CreateCandidateResponse = {
	status: number;
	candidate: ICandidate;
};

export type UpdateCandidateStatusResponse = {
	status: number;
	message: string;
	main_status: string;
	secondary_status: string;
};

export type UpdateCandidateEmploymentStatusResponse = {
	status: number;
	employment_status: string;
};

export type UpdateCandidateConclusionResponse = {
	status: number;
	candidate: IConclusions;
};

export type UpdateCandidateInfoResponse = {
	status: number;
	message: string;
};

export type GenerateUrlResponse = {
	status: number;
	url: string;
};

export type ValidateTokenResponse = {
	status: number;
	decoded: {
		candidate: ICandidate;
		url_id: string;
	};
};
