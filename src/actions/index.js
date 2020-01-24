import Axios from "axios";

export const getRaceInfo = () => {
  return dispatch => {
    dispatch({ type: "GET_RACE_INFO_START" });
    Axios
      .get("https://ergast.com/api/f1/2020.json")
      .then(res => {
        dispatch({ type: "GET_RACE_INFO_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "GET_RACE_INFO_ERROR", payload: err});
      });
  }
};