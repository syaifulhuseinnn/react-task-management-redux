import React, { useState } from "react";
import Header from "../components/Header";
import AddNewNote from "../components/AddNewNote";

export default function HomeTemplate({ children }) {
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <div className="position-relative">
      <Header showModal={showModal} />
      {children}
      <AddNewNote modal={modal} closeModal={closeModal} setModal={setModal} />
    </div>
  );
}
