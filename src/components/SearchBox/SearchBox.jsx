import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import clsx from "clsx";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filters.name);

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <input
        className={clsx(css.inputFilter)}
        type="text"
        value={selectNameFilter}
        onChange={onChangeFilter}
        placeholder="Search contacts" 
      />
    </div>
  );
};

export default SearchBox;


















