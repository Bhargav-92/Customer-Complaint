// to return genrated random numbers
export const genrate_number = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
