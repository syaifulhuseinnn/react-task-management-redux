import React from "react";

export default function NotesItem({ children }) {
  return (
    <div className="task mt-3 p-3 rounded d-block text-truncate">
      {children}
    </div>
  );
}
