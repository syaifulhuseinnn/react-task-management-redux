import React from "react";
import { Container } from "react-bootstrap";
import NotesPage from "./pages/NotesPage";
import "./css/style.css";

function App() {
  return (
    <Container className="py-2">
      <NotesPage />
    </Container>
  );
}

export default App;
