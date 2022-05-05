const getItemBorderColor = (secondary_status: string) => {
  let color = '';

  if (secondary_status === 'new entry') color = 'card card-new';
  if (secondary_status === 'dismissed') color = 'card card-dismissed';
  if (secondary_status === 'doubting') color = 'card card-doubting';
  if (secondary_status === 'approved') color = 'card card-aproved';

  return color;
};

export default getItemBorderColor;
