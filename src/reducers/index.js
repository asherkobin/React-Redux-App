const initialState = {
  raceInfo: null,
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RACE_INFO_START":
      return { ...state, isLoading: true }
    case "GET_RACE_INFO_SUCCESS":
      return { ...state, isLoading: false, raceInfo: action.payload };
    case "GET_RACE_INFO_ERROR":
      return { ...state, error: action.payload }
    default:
      return state;
  }
}