import "../styles/Card.css";
import { BsCartPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
function RestaurantCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`/details/${item.id}`);
  };
  const handlePlusClick = () => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`, {
      // position: toast.POSITION.top_right,
      autoClose: 3000,
    });
  };
  return (
    // <div className="restaurant-cards">
    <div className="restaurant-card">
      <div
        className="restaurant-image"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <img src={item.image} alt={item.name} />
        <div className="discount">{item.servings * 10} OFF Upto &#8377;100</div>
      </div>
      <div className="restaurant-details">
        <div className="group">
          <p className="restaurant-name">{item.name}</p>
          <p className="rating">{item.rating} &#x2605;</p>
        </div>
        <div className="group">
          {/*<p>{item.cuisine}</p>*/}
          <p>{item.tags.slice(0, 2).join(",")}</p>
          {/* {item.tags.map((tag, index) => (
               <p key={index}>{tag}</p>
             ))}*/}
          <p>{item.caloriesPerServing} calories</p>
          <p>{item.cookTimeMinutes} min</p>
        </div>
        <div className="group">
          <p>{item.cuisine}</p>
          <p>{item.mealType.join(",")}</p>
          <p className="difficult">{item.difficulty}</p>
        </div>
        <div className="group">
          <p className="Price">&#8377; {item.servings * 100}</p>
          <button className="favorite-btn" onClick={handlePlusClick}>
            <FaPlus className="favorite-icon" />
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default RestaurantCard;
