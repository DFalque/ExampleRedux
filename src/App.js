import "./App.css";
//COMPONENTS
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import FilterNote from "./components/FilterNotes";

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
