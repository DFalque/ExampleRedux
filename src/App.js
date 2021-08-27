import { useDispatch, useSelector } from "react-redux";
import "./App.css";
//COMPONENTS
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import FilterNote from "./components/FilterNotes";
import { change } from "./redux/reducers/filterReducer";

//TODO Para tener diferentes reducers en un Store
/*const reducer = combineReducers({
  reducerUno,
});*/

const App = () => {
  return (
    <div className="App">
      <h1>Notes Blog</h1>
      <NewNote />
      <FilterNote />
      <Notes />
    </div>
  );
};

export default App;
