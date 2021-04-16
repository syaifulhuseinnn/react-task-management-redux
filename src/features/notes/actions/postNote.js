import { fetchError } from "../reducers/NotesReducer";

export const post = (newNote) => async (dispatch) => {
  try {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote)
    };

    let response = await fetch(
      "https://quiet-lake-04193.herokuapp.com/notes",
      config
    );
    let jsondata = await response.json();

    if (response.ok) {
      dispatch({ type: "notes/noteAdded", payload: jsondata });
    } else {
      dispatch(fetchError(response));
    }
  } catch (error) {
    return dispatch(fetchError(error));
  }
};
