const buttonReducer = (state = true, action) => {
  switch (action.type) {
    case 'DARK':
      return !state;
    default:
      return state;
  }
};

export default buttonReducer;
