import { combineReducers, createStore } from "redux";
import { filterReducer } from "./reducers/filterReducer";
import { noteReducer } from "./reducers/noteReducer";

const reducers = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducers);

export default store;
