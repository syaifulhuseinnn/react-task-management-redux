import React from "react";

export default function Title({ children, isDone }) {
  return isDone ? (
    <h6 className="text-light">
      <del>{children}</del>
    </h6>
  ) : (
    <h6 className="text-light">{children}</h6>
  );
}
