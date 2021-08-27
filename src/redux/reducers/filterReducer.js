export const filterReducer = (state = "all", action) => {
  console.log(action);
  if (action.type === "@filter/change_filter") {
    return action.payload;
  }
  return state;
};

export const changeFilterNotes = (value) => {
  return {
    type: "@filter/change_filter",
    payload: value,
  };
};
