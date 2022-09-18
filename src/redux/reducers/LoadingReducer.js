
const initialState = {
  isLoading: false,
};

export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      state.isLoading = action.payload;
      return state;
    default:
      return state;
  }
};
