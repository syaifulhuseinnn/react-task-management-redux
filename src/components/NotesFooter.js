import React from "react";
import { useDispatch } from "react-redux";
import { deleted } from "../features/notes/actions/deleteNote";

export default function NotesFooter({ children, note_id }) {
  const dispatch = useDispatch();
  const deleteNote = (note_id) => {
    console.log(note_id);
    dispatch(deleted(note_id));
  };
  return (
    <div className="d-flex justify-content-between mt-3">
      <small className="text-light text-center">{children}</small>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteNote(note_id)}>
        <i className="bx bxs-trash-alt"></i>
      </button>
    </div>
  );
}
