import { fetchError } from "../reducers/NotesReducer";

export const deleted = (id) => async (dispatch) => {
  try {
    const config = {
      method: "DELETE"
    };

    let response = await fetch(
      `https://quiet-lake-04193.herokuapp.com/notes/${id}`,
      config
    );
    let jsondata = await response.json();

    if (response.ok) {
      dispatch({ type: "notes/noteDeleted", payload: id });
    } else {
      dispatch(fetchError(response));
    }
  } catch (error) {
    return dispatch(fetchError(error));
  }
};
