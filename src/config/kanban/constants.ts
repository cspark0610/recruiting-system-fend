export type SecondaryStatus = {
  id: number;
  displayName: string;
  value: string;
  checked: boolean;
}[];

const secondaryStatus: SecondaryStatus = [
  {
    id: 1,
    displayName: 'New',
    value: 'new entry',
    checked: false,
  },
  {
    id: 2,
    displayName: 'Dismissed',
    value: 'dismissed',
    checked: false,
  },
  {
    id: 3,
    displayName: 'Aproved',
    value: 'aproved',
    checked: false,
  },
  {
    id: 4,
    displayName: 'Doubting',
    value: 'doubting',
    checked: false,
  },
];
export default secondaryStatus;
