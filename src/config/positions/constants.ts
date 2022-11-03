type Priority = {
	id: number;
	name: string;
	displayName: string;
};

const priorities: Priority[] = [
	{
		id: 4,
		name: 'Urgent',
		displayName: 'Urgent',
	},
	{
		id: 3,
		name: 'High',
		displayName: 'High',
	},
	{
		id: 2,
		name: 'Normal',
		displayName: 'Normal',
	},
	{
		id: 1,
		name: 'Low',
		displayName: 'Low',
	},
];

export default priorities;
