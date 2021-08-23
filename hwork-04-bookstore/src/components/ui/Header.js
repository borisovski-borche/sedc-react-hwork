import React, { useContext } from "react";

import classes from "./Header.module.css";

import { Link } from "react-router-dom";
import BooksContext from "../../context/BoooksContext/books.context";

const Header = props => {
  const booksContext = useContext(BooksContext);
  const totalOrders = booksContext.getTotalOrders();

  const onLogout = isLoggedin => {
    isLoggedin && booksContext.logoutUser();
  };

  return (
    <header className="m-4 d-flex justify-content-between">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="display-4">The Bookstore Homework (with users!)</h1>
      </Link>
      <div className={classes.iconContainer}>
        <Link to="/shopping-cart">
          {booksContext.loggedInUser && (
            <div className={classes.cartIcon}>
              <i className="bi bi-cart p-3"></i>
              <span className="badge bg-danger">{totalOrders}</span>
            </div>
          )}
        </Link>
        {booksContext.loggedInUser &&
          booksContext.isAdminCheck(booksContext.loggedInUser) && (
            <Link to="/add">
              <div className={classes.addIcon}>
                <i className="bi bi-plus-lg"></i>
              </div>
            </Link>
          )}
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div
            className={classes.login}
            onClick={() => onLogout(booksContext.loggedInUser)}
          >
            {booksContext.loggedInUser ? "Sign out" : "Sign in"}
          </div>
        </Link>
        <Link to="/">
          <div className="bg-success">
            <i className="bi bi-house-fill"></i>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
