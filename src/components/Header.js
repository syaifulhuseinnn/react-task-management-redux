import React from "react";
import { Button } from "react-bootstrap";

export default function Header({ showModal }) {
  return (
    <div className="d-block d-md-flex d-lg-flex d-xl-flex justify-content-between align-items-center mb-5">
      <div className="navnav">
        <h3 className="text-light text-brand">Task Management</h3>
      </div>
      <div>
        <Button variant="primary" onClick={showModal} block>
          <i className="bx bx-plus"></i> New
        </Button>
      </div>
    </div>
  );
}
