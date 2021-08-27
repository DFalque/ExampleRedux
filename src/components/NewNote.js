import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../redux/actions/noteActions";

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (event) => {
    event.preventDefault();
    const { target } = event;
    const content = target.note.value;
    dispatch(createNote(content));
    target.note.value = "";
  };
  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>add</button>
    </form>
  );
};

export default NewNote;
