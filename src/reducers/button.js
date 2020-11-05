const buttonReducer = (state = true, action) => {
  switch (action.type) {
    case 'DARK':
      if (action.payload === null) {
        return true;
      } else {
        return false;
      }

    default:
      return state;
  }
};

export default buttonReducer;
