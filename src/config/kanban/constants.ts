export type SecondaryStatus = {
  id: number;
  displayName: string;
  value: string;
  checked: boolean;
  color: string;
}[];

const secondaryStatus: SecondaryStatus = [
  {
    id: 1,
    displayName: 'Dismissed',
    value: 'dismissed',
    checked: false,
    color: 'bg-red-500',
  },
  {
    id: 2,
    displayName: 'Doubting',
    value: 'doubting',
    checked: false,
    color: 'bg-orange-400',
  },
  {
    id: 3,
    displayName: 'Aproved',
    value: 'aproved',
    checked: false,
    color: 'bg-green-500',
  },
  {
    id: 4,
    displayName: 'New Entry',
    value: 'new entry',
    checked: false,
    color: 'bg-slate-600',
  },
];
export default secondaryStatus;
