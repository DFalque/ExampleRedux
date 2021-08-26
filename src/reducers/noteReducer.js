const generateId = () => Math.floor(Math.random() * 9999999) + 1;

export const noteReducer = (state = [], action) => {
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

export const createNote = (content) => {
  return {
    type: "@notes/created",
    payload: {
      id: generateId(),
      content,
      important: false,
    },
  };
};

export const toggleImportantOf = (id) => {
  return {
    type: "@notes/toggle_important",
    payload: {
      id,
    },
  };
};
