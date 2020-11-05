const buttonReducer = (state = true, action) => {
  switch (action.type) {
    case 'DARK':
      return !action.payload;

    default:
      return state;
  }
};

export default buttonReducer;
