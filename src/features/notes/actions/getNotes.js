import { fetchStart, fetchSuccess, fetchError } from "../reducers/NotesReducer";

export const get = () => async (dispatch) => {
  dispatch(fetchStart(true));
  try {
    let response = await fetch("https://quiet-lake-04193.herokuapp.com/notes");
    let jsondata = await response.json();
    if (!response.ok) {
      dispatch(fetchStart(false));
      dispatch(fetchError(response));
    } else {
      dispatch(fetchStart(false));
      return dispatch(fetchSuccess(jsondata));
    }
  } catch (error) {
    dispatch(fetchStart(false));
    return dispatch(fetchError(error));
  }
};
