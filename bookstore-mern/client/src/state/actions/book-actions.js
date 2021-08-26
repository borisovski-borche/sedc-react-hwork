import { fetchBooks } from "../../services/books.service";
import { actionTypes as AT } from "./action-types";

export const fetchBooksFromDb = () => {
  return dispatch => {
    fetchBooks()
      .then(books => dispatch({ type: AT.FETCH_BOOKS, payload: { books } }))
      .catch(err => console.log(err));
  };
};

export const addBookToCart = book => {
  return dispatch => {
    dispatch({ type: AT.ADD_BOOK_CART, payload: { book } });
  };
};

export const removeBookFromCart = bookId => {
  return dispatch => {
    dispatch({ type: AT.REMOVE_BOOK_CART, payload: { bookId } });
  };
};
