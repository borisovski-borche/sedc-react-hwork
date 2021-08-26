import classes from "./CartIcon.module.css";

import { useSelector } from "react-redux";

const CartIcon = props => {
  const books = useSelector(state => state.books);

  const totalOrders = books.filter(book => book.inShoppingCart).length;

  return (
    <div
      className="nav-link my-0 p-0 fs-2 ms-3 mx-3 d-flex align-items-center"
      aria-current="page"
      style={{ position: "relative" }}
    >
      <i className="bi bi-cart-fill fs-1 p-0"></i>
      <span
        style={{ opacity: totalOrders > 0 ? "1" : "0" }}
        className={`badge fs-6 bg-success mt-1 ms-1 ${classes.badge}`}
      >
        {totalOrders}
      </span>
    </div>
  );
};

export default CartIcon;
