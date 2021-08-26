import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { createNote, toggleImportantOf } from "./reducers/noteReducer";
//COMPONENTS
import NewNote from "./reducers/components/NewNote";
import Notes from "./reducers/components/Notes";

//TODO Para tener diferentes reducers en un Store
/*const reducer = combineReducers({
  reducerUno,
});*/

const App = () => {
  // States
  const [note, setNote] = useState({});
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  // FUNCTIONS

  return (
    <div className="App">
      <h1>Notes Blog</h1>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
