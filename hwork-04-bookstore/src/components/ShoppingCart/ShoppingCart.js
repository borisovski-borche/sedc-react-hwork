import React, { useContext, Fragment } from "react";
import BooksContext from "../../context/BoooksContext/books.context";
import { Redirect } from "react-router-dom";

import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = props => {
  const booksContext = useContext(BooksContext);

  const orderCount = booksContext.getTotalOrders();

  return (
    <Fragment>
      {!booksContext.loggedInUser && <Redirect to="/" />}
      <div>
        {booksContext.cart.length ? (
          <p className="text-center display-5">Total Orders: {orderCount}</p>
        ) : (
          <p className="text-center display-4">
            Your Shopping Cart Appears to be Empty
          </p>
        )}
        <ul className="list-group">
          {booksContext.cart.map(book => (
            <ShoppingCartItem book={book} key={book.id} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ShoppingCart;
