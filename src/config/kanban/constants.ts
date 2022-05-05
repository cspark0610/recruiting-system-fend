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
    color: 'bg-[#F84D44]',
  },
  {
    id: 2,
    displayName: 'Doubting',
    value: 'doubting',
    checked: false,
    color: 'bg-[#FBBC41]',
  },
  {
    id: 3,
    displayName: 'Approved',
    value: 'approved',
    checked: false,
    color: 'bg-[#35C549]',
  },
  {
    id: 4,
    displayName: 'New Entry',
    value: 'new entry',
    checked: false,
    color: 'bg-[#475564]',
  },
];
export default secondaryStatus;
