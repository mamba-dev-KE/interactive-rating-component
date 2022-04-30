// action creators
export const setRating = (value) => {
  return { type: "SET_RATING", payload: value };
};

export const toggleSubmit = () => {
  return { type: "TOGGLE_SUBMITTED" };
};

export const reset = () => {
  return { type: "RESET" };
};

// reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "TOGGLE_SUBMITTED":
      return { ...state, isSubmitted: !state.isSubmitted };
    case "RESET":
      return { isSubmitted: false, rating: null };
    default:
      return state;
  }
};
