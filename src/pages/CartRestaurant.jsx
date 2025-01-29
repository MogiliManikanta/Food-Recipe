import "../styles/Card.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CartRestaurant({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handlePlusClick = () => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`, { autoClose: 2000 });
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
    toast.info(`Increased quantity of ${item.name}`, { autoClose: 2000 });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(item.id));
      toast.info(`Decreased quantity of ${item.name}`, { autoClose: 2000 });
    } else {
      dispatch(removeFromCart(item.id));
      toast.warn(`${item.name} removed from cart`, { autoClose: 2000 });
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.error(`${item.name} removed from cart`, { autoClose: 2000 });
  };

  const handleProceedToPayment = () => {
    toast.info("Yet to implement the page", { autoClose: 2000 });
    setTimeout(() => {
      toast.success("Redirecting to Home Page", { autoClose: 2000 });
      setTimeout(() => navigate("/"), 2000);
    }, 2000);
  };

  return (
    <>
      <div className="restaurant-card">
        <div className="restaurant-image" style={{ cursor: "pointer" }}>
          <img src={item.image} alt={item.name} />
          <div className="discount">
            {item.servings * 10} OFF Upto &#8377;100
          </div>
        </div>
        <div className="restaurant-details">
          <div className="group">
            <p className="restaurant-name">{item.name}</p>
            <p className="rating">{item.rating} &#x2605;</p>
          </div>
          <div className="group">
            <p>{item.tags.slice(0, 2).join(",")}</p>
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
            <p>Quantity: {quantity}</p>
          </div>
          <div className="group">
            <button className="cart-btn increment" onClick={handleIncrement}>
              <FaPlus />
            </button>
            <button className="cart-btn decrement" onClick={handleDecrement}>
              <FaMinus />
            </button>
            <button className="cart-btn remove" onClick={handleRemove}>
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
      {/*<div className="payment-container">
        <button className="payment-btn" onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </div>*/}
    </>
  );
}

export default CartRestaurant;
