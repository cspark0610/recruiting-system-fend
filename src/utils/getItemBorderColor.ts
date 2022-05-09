const cardColor = [
  {
    name: 'new entry',
    color: 'card card-new',
  },
  {
    name: 'dismissed',
    color: 'card card-dismissed',
  },
  {
    name: 'doubting',
    color: 'card card-doubting',
  },
  {
    name: 'approved',
    color: 'card card-approved',
  },
];

const getItemBorderColor = (secondary_status: string) => {
  const cardBorderColor = cardColor.find(
    (item) => item.name === secondary_status,
  )?.color;
  return cardBorderColor;
};

export default getItemBorderColor;
