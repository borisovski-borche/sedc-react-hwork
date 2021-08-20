import { createContext } from "react";

const BooksContext = createContext({
  books: [],
  cart: [],
  addBookToCart() {},
  addBookToStore() {},
  removeBookFromCart() {},
  getTotalOrders() {},
});

export default BooksContext;
