import { createContext } from "react";

const BooksContext = createContext({
  books: [],
  cart: [],
  loggedInUser: null,
  addBookToCart() {},
  addBookToStore() {},
  removeBookFromCart() {},
  getTotalOrders() {},
  isAdminCheck() {},
  logoutUser() {},
  loginUser() {},
});

export default BooksContext;
