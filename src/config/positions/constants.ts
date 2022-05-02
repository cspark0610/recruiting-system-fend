type Priority = {
  id: number;
  name: string;
  displayName: string;
};

const priorities: Priority[] = [
  {
    id: 4,
    name: 'urgent',
    displayName: 'Urgent',
  },
  {
    id: 3,
    name: 'high',
    displayName: 'High',
  },
  {
    id: 2,
    name: 'normal',
    displayName: 'Normal',
  },
  {
    id: 1,
    name: 'low',
    displayName: 'Low',
  },
];

export default priorities;
