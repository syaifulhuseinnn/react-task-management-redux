import React from "react";

export default function Description({ children, isDone }) {
  return isDone ? (
    <small className="text-info">
      <del>{children}</del>
    </small>
  ) : (
    <small className="text-info">{children}</small>
  );
}
