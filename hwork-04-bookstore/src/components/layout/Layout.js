import React from "react";
import BooksContextProvider from "../../context/BoooksContext/BookContextProvider";

const Layout = props => {
  return <BooksContextProvider>{props.children}</BooksContextProvider>;
};

export default Layout;
