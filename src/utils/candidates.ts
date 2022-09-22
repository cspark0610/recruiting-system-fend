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

export function getDetailHeaderText(main_status: string) {
	return headers.find((header) => header.key === main_status)?.text;
}

export function getTopBorderColor(secondary_status: string) {
	const cardBorderColor = cardColor.find((item) => item.name === secondary_status)?.color;
	return cardBorderColor;
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

	candidates.forEach((candidate) => {
		const filteredByInterested = executeFilterAndSort("interested", candidate.postulations!);
		const filteredByApplying = executeFilterAndSort("applying", candidate.postulations!);
		const filteredByMeeting = executeFilterAndSort("meeting", candidate.postulations!);
		const filteredByChosen = executeFilterAndSort("chosen", candidate.postulations!);

		filteredByInterested.length &&
			interested.push({ ...candidate, postulations: filteredByInterested });
		filteredByApplying.length && applying.push({ ...candidate, postulations: filteredByApplying });
		filteredByMeeting.length && meeting.push({ ...candidate, postulations: filteredByMeeting });
		filteredByChosen.length && chosen.push({ ...candidate, postulations: filteredByChosen });
	});

	return {
		interested,
		applying,
		meeting,
		chosen,
	};
};
