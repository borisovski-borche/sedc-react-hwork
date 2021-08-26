import { actionTypes as AT } from "../actions/action-types";
import { Book } from "../../models/book.model";

const convertBooks = books => {
  return books.map(
    book =>
      new Book(
        book._id,
        book.title,
        book.authorName,
        book.published,
        book.inStock,
        book.genre,
        book.coverImgUrl
      )
  );
};

const booksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case AT.FETCH_BOOKS:
      return convertBooks(payload.books);

    case AT.ADD_BOOK_CART:
      payload.book.inShoppingCart = true;
      payload.book.addToCart();
      return state.map(book =>
        book.id === payload.book.id ? payload.book : book
      );

    case AT.REMOVE_BOOK_CART:
      return state.map(book => {
        if (book.id === payload.bookId) {
          book.inShoppingCart = false;
          book.resetOrder();
          return book;
        }
        return book;
      });

    default:
      return state;
  }
};

export default booksReducer;
