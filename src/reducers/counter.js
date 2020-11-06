const counterReducer = (state = 'Warrington', action) => {
  switch (action.type) {
    case 'INCREMENT':
      return action.payload;

    default:
      return state;
  }
};

export default counterReducer;
