import { fetchError } from "../reducers/NotesReducer";

export const update = (updatedNote, id) => async (dispatch, getState) => {
  try {
    const config = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedNote)
    };

    let response = await fetch(
      `https://quiet-lake-04193.herokuapp.com/notes/${id}`,
      config
    );
    let jsondata = await response.json();

    if (response.ok) {
      console.log("Data updated", jsondata);
      const { id, titleNote, tasks } = jsondata;
      const state = getState();

      const copiedNotes = [...state.notes];
      const findNote = copiedNotes.find((note) => note.id === id);
      if (findNote) {
        findNote.titleNote = titleNote;
        findNote.tasks = tasks;
      }

      dispatch({ type: "notes/noteUpdate", payload: copiedNotes });
    } else {
      dispatch(fetchError(response));
    }
  } catch (error) {
    return dispatch(fetchError(error));
  }
};
