import secondaryStatus from "../config/kanban/constants";
import { ICandidate, IPostulation } from "../redux/candidates/types/data";

const headers = [
	{
		key: "interested",
		text: "Interested in",
	},
	{
		key: "applying",
		text: "Applying for",
	},
	{
		key: "meeting",
		text: "Meeting for",
	},
	{
		key: "chosen",
		text: "Chosen for",
	},
];

const cardColor = [
	{
		name: "new entry",
		color: "card card-new",
	},
	{
		name: "dismissed",
		color: "card card-dismissed",
	},
	{
		name: "doubting",
		color: "card card-doubting",
	},
	{
		name: "approved",
		color: "card card-approved",
	},
];

export function getDetailHeaderText(main_status: string, employment_status?: string) {
	return headers.find((header) => header.key === main_status)?.text;
}

export function getTopBorderColor(main_status: string, secondary_status: string) {
	if (main_status === "interested" && secondary_status === "new entry") {
		return cardColor[0].color;
	}
	if (main_status === "applying" && secondary_status === "new entry") {
		return cardColor[0].color;
	}
	if (main_status === "meeting" && secondary_status === "new entry") {
		return cardColor[0].color;
	}
	if (main_status === "chosen" && secondary_status === "approved") {
		return cardColor[3].color;
	}
	const cardBorderColor = cardColor.find((item) => item.name === secondary_status)?.color;
	return cardBorderColor;
}

export function getHeaderTopBorderColor(main_status: string, secondary_status: string) {
	if (main_status === "interested" && secondary_status === "new entry") {
		return secondaryStatus[3].color;
	}
	if (main_status === "applying" && secondary_status === "new entry") {
		return secondaryStatus[3].color;
	}
	if (main_status === "meeting" && secondary_status === "new entry") {
		return secondaryStatus[3].color;
	}
	if (main_status === "chosen" && secondary_status === "approved") {
		return secondaryStatus[2].color;
	}
	const headerTopBorderColor = secondaryStatus.find(
		(status) => status.value === secondary_status
	)?.color;
	return headerTopBorderColor;
}

const executeFilterAndSort = (filterCriteria: string, arr: IPostulation[]) => {
	return arr
		.filter((p) => p.main_status === filterCriteria)
		.sort((a, b) => {
			if (a.createdAt! > b?.createdAt!) {
				return -1;
			}
			if (a.createdAt! < b.createdAt!) {
				return 1;
			}
			return 0;
		});
};

export const sortByColumn = (candidates: ICandidate[]) => {
	const interested: ICandidate[] = [];
	const applying: ICandidate[] = [];
	const meeting: ICandidate[] = [];
	const chosen: ICandidate[] = [];
	const hired: ICandidate[] = [];

	// filter first by those candidate that has not been "rejected"
	candidates = candidates.filter((candidate) => candidate.isRejected === false);

	candidates.forEach((candidate) => {
		const filteredByInterested = executeFilterAndSort("interested", candidate.postulations!);
		const filteredByApplying = executeFilterAndSort("applying", candidate.postulations!);
		const filteredByMeeting = executeFilterAndSort("meeting", candidate.postulations!);
		const filteredByChosen = executeFilterAndSort("chosen", candidate.postulations!);
		const filteredByHired = executeFilterAndSort("hired", candidate.postulations!);

		filteredByInterested.length &&
			interested.push({ ...candidate, postulations: filteredByInterested });
		filteredByApplying.length && applying.push({ ...candidate, postulations: filteredByApplying });
		filteredByMeeting.length && meeting.push({ ...candidate, postulations: filteredByMeeting });
		filteredByChosen.length && chosen.push({ ...candidate, postulations: filteredByChosen });
		filteredByHired.length && hired.push({ ...candidate, postulations: filteredByHired });
	});

	return {
		interested,
		applying,
		meeting,
		chosen,
		hired,
	};
};

export const MAIN_STATUS_ALLOWED = ["interested", "applying", "meeting", "chosen", "hired"];
export const EMPLOYMENT_STATUS_ALLOWED = ["Active", "Former", "In Process"];
export const EMPLOYMENT_STATUS = ["active", "former", "in_process"];

export const calculateCandidateAge = (birth_date: string) => {
	const birthYear = birth_date.split("-")[0];
	const age = new Date().getFullYear() - Number(birthYear);
	return age;
};
