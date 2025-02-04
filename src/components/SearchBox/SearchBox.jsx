import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
=======
import { changeFilter } from "../../redux/filtersSlice";
import clsx from "clsx";
>>>>>>> parent of b782856 (add)
import css from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filters/selectors";
import { filterContacts } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const filter = useSelector(selectFilter);
  const onChangefilter = (event) => {
    const action = filterContacts(event.target.value);
    dispatch(action);
  };

  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={onChangefilter}
          className={css.field}
        />
      </label>
    </div>
  );
};
=======
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

















>>>>>>> parent of b782856 (add)

export default SearchBox;