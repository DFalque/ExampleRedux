const generateId = () => Math.floor(Math.random() * 9999999) + 1;

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
