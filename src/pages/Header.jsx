import logo from "../assets/logo-removebg-preview (1).png";
import { CiSearch } from "react-icons/ci";
import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const cartItemCount = cart?.items?.length || 0;
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="app-title">Food Recipe App</h1>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Favourite</li>
        </Link>
        <li>
          <IoCartOutline style={{ color: "dodgerblue", fontSize: "24px" }} />

          {cartItemCount}
        </li>{" "}
        <li>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search ingredients..."
              className="search-input"
            />
            <CiSearch className="search-icon" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
