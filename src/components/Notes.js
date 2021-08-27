import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportantOf } from "../redux/actions/noteActions";

const Notes = () => {
  // COGEMOS LAS NOTAS
  const state = useSelector((state) =>
    state.notes.filter((note) => {
      if (state.filter === "all") {
        return state.notes;
      } else if (state.filter === "important") {
        return note.important === true;
      } else if (state.filter === "not important") {
        return note.important === false;
      }
    })
  );

  // CAMBIAR EL STORE
  const dispatch = useDispatch();
  const toggleImportant = (id) => {
    dispatch(toggleImportantOf(id));
  };

  return (
    <ul>
      {state.map((note) => {
        return (
          <li key={note.id} onClick={() => toggleImportant(note.id)}>
            {note.content}
            <strong>
              {note.important ? " Is importante" : " Not importante"}
            </strong>
          </li>
        );
      })}
    </ul>
  );
};

export default Notes;
