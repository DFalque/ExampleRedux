import { useDispatch, useSelector } from "react-redux";
//COMPONENTS
import { changeFilterNotes } from "../redux/reducers/filterReducer";

//TODO Para tener diferentes reducers en un Store
/*const reducer = combineReducers({
  reducerUno,
});*/

const FilterNote = () => {
  const state = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // FUNCTIONS
  const filterSellected = (value) => {
    dispatch(changeFilterNotes(value));
  };

  return (
    <div>
      all
      <input
        type="radio"
        name="filter"
        onClick={() => filterSellected("all")}
        defaultChecked
      />
      Important
      <input
        type="radio"
        name="filter"
        onClick={() => filterSellected("important")}
      />
      Not Important
      <input
        type="radio"
        name="filter"
        onClick={() => filterSellected("not important")}
      />
    </div>
  );
};

export default FilterNote;
