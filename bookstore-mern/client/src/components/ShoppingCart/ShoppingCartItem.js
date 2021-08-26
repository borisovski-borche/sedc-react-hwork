import { useState } from "react";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/actions";

import classes from "./ShoppingCartItem.module.css";

const ShoppingCartItem = props => {
  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators, dispatch);

  const { book } = props;

  const [orderCount, setOrderCount] = useState(book.orderCount);

  return (
    <li className={`list-group-item ${classes.ShoppingCartItem}`}>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img className="img-fluid" src={book.coverImgUrl} alt={book.title} />
          <div className="col-8 m-3">
            <h4>{book.title}</h4>
            <p className="fst-italic">by {book.authorName}</p>
          </div>
        </div>
        <div className={classes.orderedDisplay}>
          <span className={"form-text me-3 fs-5"}>
            Available : {book.inStock - orderCount}
          </span>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => {
                if (book.orderCount === 1) {
                  AC.removeBookFromCart(book.id);
                  return;
                }
                book.removeFromCart();
                setOrderCount(book.orderCount);
              }}
            >
              -
            </button>
            <div className="btn btn-outline-success">{orderCount}</div>
            <button
              disabled={book.orderCount === book.inStock}
              type="button"
              className={`btn btn-outline-${
                book.orderCount === book.inStock ? "danger" : "success"
              }`}
              onClick={() => {
                book.addToCart();
                setOrderCount(book.orderCount);
              }}
            >
              +
            </button>
          </div>
        </div>
        <button
          className={`btn btn-outline-danger p-3 ${classes.remove} text-danger`}
          onClick={() => AC.removeBookFromCart(book.id)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </li>
  );
};

export default ShoppingCartItem;
