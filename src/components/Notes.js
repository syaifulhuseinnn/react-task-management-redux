import React from "react";

export default function Notes({ children, props }) {
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-3">
      <div className="notes p-3 rounded">{children}</div>
    </div>
  );
}
