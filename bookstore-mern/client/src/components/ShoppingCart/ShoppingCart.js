import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = props => {
  const books = useSelector(state => state.books);
  const auth = useSelector(state => state.auth);

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
    </Fragment>
  );
};

export default ShoppingCart;
