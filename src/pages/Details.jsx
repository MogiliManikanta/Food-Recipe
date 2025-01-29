import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/Details.css";
import { FaPlus } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allRestaurants = useSelector((state) => state.restaurant);

  if (!allRestaurants?.data) return <p>Loading...</p>;

  const selectedItem = allRestaurants.data.find(
    (item) => item.id === Number(id)
  );
  const handlePlusClick = () => {
    dispatch(addToCart(selectedItem));
    toast.success(`${selectedItem.name} added to cart!`, {
      // position: toast.POSITION.top_right,
      autoClose: 3000,
    });
  };

  if (!selectedItem) return <p>Item not found</p>;

  return (
    <div className="details-container">
      <div className="details-card">
        <img
          src={selectedItem.image}
          alt={selectedItem.name}
          className="details-image"
        />

        <div className="details-content">
          <h2 className="details-title">{selectedItem.name}</h2>
          <p className="details-info">
            <strong>Calories:</strong> {selectedItem.caloriesPerServing} |
            <strong> Cook Time:</strong> {selectedItem.cookTimeMinutes} min |
            <strong> Servings:</strong> {selectedItem.servings} |
            <strong className="rating">{selectedItem.rating} &#x2605;</strong>
          </p>

          <div className="price-section">
            <p className="Price">&#8377; {selectedItem.servings * 100}</p>
            <button className="favorite-btn" onClick={handlePlusClick}>
              <FaPlus className="favorite-icon" />
            </button>
          </div>

          <div className="details-section">
            <h3>Tags</h3>
            <ul className="details-list">
              {selectedItem.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="details-section">
            <h3>Ingredients</h3>
            <ul className="details-list">
              {selectedItem.ingredients.slice(0, 2).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
