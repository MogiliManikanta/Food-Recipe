import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import image from "../assets/image.png";
import CartRestaurant from "./CartRestaurant";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart?.items || [];
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    toast.info("Yet to implement the page", { autoClose: 2000 });
    setTimeout(() => {
      toast.success("Redirecting to Home Page", { autoClose: 2000 });
      setTimeout(() => navigate("/"), 2000);
    }, 2000);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <img src={image} alt="Your cart is empty" />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              justifyContent: "center",
              padding: "50px",
            }}
          >
            {cart.items.map((item) => {
              return <CartRestaurant item={item} key={item.id} />;
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className="payment-btn" onClick={handleProceedToPayment}>
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
