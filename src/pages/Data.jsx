import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../redux/dataSlice";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

function Data() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.restaurant);

  const { selectedCategory } = useSelector((state) => state.filter);
  const { priceCategory } = useSelector((state) => state.price);

  console.log(selectedCategory);
  console.log(priceCategory);

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) =>
          item.mealType.some(
            (meal) => meal.toLowerCase() === selectedCategory.toLowerCase()
          )
        );

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchRestaurants());
    }
  }, [dispatch, data.length]);

  return (
    <div>
      {loading ? (
        <ShimmerUI />
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            padding: "100px",
          }}
        >
          {filteredData.map((item) => (
            <RestaurantCard item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Data;
