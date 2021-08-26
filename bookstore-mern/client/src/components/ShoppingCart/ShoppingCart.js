import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/actions";

import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = props => {
  const books = useSelector(state => state.books);
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators, dispatch);

  const booksInCart = books.filter(book => book.inShoppingCart);

  return (
    <Fragment>
      {!auth.user && <Redirect to="/" />}
      <div className="mt-5">
        {!booksInCart.length && (
          <p className="text-center display-4 my-4">
            Your Shopping Cart Appears to be Empty
          </p>
        )}
        <ul className="list-group">
          {booksInCart.map(book => (
            <ShoppingCartItem book={book} key={book.id} />
          ))}
        </ul>
      </div>
      {!!booksInCart.length && (
        <div className="btn-group m-3">
          <Link to="/checkout">
            <button className="btn btn-success">Go to Checkout</button>
          </Link>
          <button className="btn btn-danger" onClick={() => AC.clearCart()}>
            Clear Cart
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default ShoppingCart;
