import React from "react";

export default function NotesTitle({ children, note_id, showViewModal }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h5 className="text-light">{children}</h5>
      <small
        className="text-warning icon-pointer"
        onClick={() => showViewModal(note_id)}>
        Show
      </small>
    </div>
  );
}
