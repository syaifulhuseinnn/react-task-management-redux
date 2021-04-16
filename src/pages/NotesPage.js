import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Notes from "../components/Notes";
import NotesContainer from "../components/NotesContainer";
import NotesTitle from "../components/NotesTitle";
import NotesItem from "../components/NotesItem";
import Title from "../components/Title";
import Description from "../components/Description";
import Loader from "../components/Loader";
import NotesFooter from "../components/NotesFooter";
import DetailsNote from "../components/DetailsNote";
import HomeTemplate from "../template/HomeTemplate";

import { get } from "../features/notes/actions/getNotes";

export default function NotesPage() {
  const [viewModal, setViewModal] = useState(false);
  const [details, setDetails] = useState(undefined);

  const data = useSelector((state) => state.notes);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  const showViewModal = (note_id) => {
    const findNote = data.find((note) => note.id === note_id);
    setDetails(findNote);
    setViewModal(true);
  };

  const closeViewModal = () => setViewModal(false);

  // useEffect hook
  useEffect(() => {
    dispatch(get());
  }, []);

  return (
    <HomeTemplate>
      {isLoading && <Loader />}
      {error && <Loader status={error.status} statusText={error.statusText} />}
      {data && (
        <NotesContainer>
          {data.map((notes, index) => (
            <Notes key={index}>
              <NotesTitle note_id={notes.id} showViewModal={showViewModal}>
                {notes.titleNote}
              </NotesTitle>
              {notes.tasks.slice(0, 3).map((task, index) => (
                <NotesItem key={index}>
                  <Title isDone={task.isDone}>{task.strTask}</Title>
                  <Description isDone={task.isDone}>
                    {task.strDescription}
                  </Description>
                </NotesItem>
              ))}
              <NotesFooter note_id={notes.id}>
                {notes.tasks.length > 3
                  ? `${notes.tasks.length - 3}+ tasks more`
                  : ""}
              </NotesFooter>
            </Notes>
          ))}
        </NotesContainer>
      )}
      {viewModal && (
        <DetailsNote
          modal={viewModal}
          setModal={setViewModal}
          closeModal={closeViewModal}
          detailsNote={details}
        />
      )}
    </HomeTemplate>
  );
}
