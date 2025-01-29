import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/filterSlice";
import "../styles/filter.css";

function Filter() {
  const dispatch = useDispatch();
  const categories = ["All", "Breakfast", "Lunch", "Dinner"];
  const selectedCategory = useSelector(
    (state) => state.filter.selectedCategory
  );
  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };
  return (
    <div className="category-filter">
      <label>Categories : </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Filter;
