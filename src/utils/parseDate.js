export const parseDate = (date = new Date()) => {
  // console.log(date);
  return new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' });
};

export const unparseDate = (date) => {
  const split = date.split('/');
  const day = ('0' + split[1]).slice(-2);
  const month = ('0' + split[0]).slice(-2);
  const unsplit = `${split[2]}-${month}-${day}`;
  console.log(unsplit);
  return unsplit;
};
