export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr,
  };
};

export const switchButton = () => {
  return {
    type: 'DARK',
  };
};
