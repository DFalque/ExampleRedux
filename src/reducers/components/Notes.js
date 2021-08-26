import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportantOf } from "../noteReducer";

const Notes = () => {
  const state = useSelector((state) => state);
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
