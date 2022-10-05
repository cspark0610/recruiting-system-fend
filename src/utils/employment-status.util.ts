export type EmploymentStatus = {
	id: number;
	displayName: string;
	value: string;
	checked: boolean;
	color: string;
}[];

const employmentStatus: EmploymentStatus = [
	{
		id: 1,
		displayName: "Former",
		value: "former",
		checked: false,
		//tdv no definido el color momentaneamente en rojo
		color: "bg-[#F84D44]",
	},
	{
		id: 2,
		displayName: "In Process",
		value: "in_process",
		checked: false,
		//green
		color: "bg-[#35C549]",
	},
	{
		id: 3,
		displayName: "Active",
		value: "active",
		checked: false,
		color: "bg-cyan-color",
	},
];

export default employmentStatus;
