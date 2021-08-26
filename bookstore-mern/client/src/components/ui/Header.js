import React, { useEffect, useMemo } from "react";

import { Link } from "react-router-dom";

import CartIcon from "./CartIcon";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/actions";

const Header = props => {
  const dispatch = useDispatch();

  const AC = useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  );

  useEffect(() => {
    AC.loginUser();
  }, [AC]);

  const auth = useSelector(state => state.auth);

  const onLogout = () => {
    AC.logOutUser();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border border-2">
      <div className="container-fluid fs-4">
        <Link className="text-decoration-none" to="/">
          <div className="navbar-brand fs-3 ms-3" href="#">
            MERN BOOKSTORE
          </div>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="text-decoration-none">
                <div className="nav-link" aria-current="page">
                  Home
                </div>
              </Link>
            </li>
            {auth.admin && (
              <li className="nav-item">
                <Link to="/add" className="text-decoration-none">
                  <div className="nav-link" aria-current="page">
                    Add
                  </div>
                </Link>
              </li>
            )}
            <li className="nav-item"></li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4 d-flex align-items-center">
            <Link to="/login" className="text-decoration-none">
              <div
                className="nav-link"
                aria-current="page"
                onClick={() => onLogout()}
              >
                <i className="bi bi-person-fill"></i>
                {auth.user ? "Logout" : "Login"}
              </div>
            </Link>
            {auth.user && (
              <Link to="/shopping-cart" className="text-decoration-none">
                <CartIcon />
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
