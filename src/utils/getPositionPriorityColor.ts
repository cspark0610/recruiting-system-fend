const positionPriorityColors = [
  {
    name: 'Low',
    color: 'bg-slate-200 text-black',
  },
  {
    name: 'Normal',
    color: 'bg-[#00ADEF] text-white',
  },
  {
    name: 'High',
    color: 'bg-[#FBBC41] text-black',
  },
  {
    name: 'Urgent',
    color: 'bg-[#F84D44] text-white',
  },
];

export default function getPositionPriorityColor(priority: string) {
  const priorityColor = positionPriorityColors.find(
    (p) => p.name === priority,
  )?.color;
  return priorityColor;
}
