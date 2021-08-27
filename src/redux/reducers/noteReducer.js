const initialState = [
  {
    important: true,
    content: "Example of using Redux with good practices",
    id: 0,
  },
  {
    important: true,
    content: "Write a new Note",
    id: 1,
  },
];

export const noteReducer = (state = initialState, action) => {
  if (action.type === "@notes/created") {
    return state.concat(action.payload);
  }
  if (action.type === "@notes/toggle_important") {
    const { id } = action.payload;
    return state.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          important: !note.important,
        };
      } else {
        return note;
      }
    });
  }
  return state;
};
