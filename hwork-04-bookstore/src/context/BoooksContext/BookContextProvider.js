import BooksContext from "./books.context";
import { Book } from "./book.model";

import { useState, useEffect } from "react";

import { defaultBooks, defaultUsers } from "./data";

const BooksContextProvider = props => {
  //local storage setup
  const localStorageBooks = JSON.parse(
    window.localStorage.getItem("books")
  ).map(
    book =>
      new Book(
        book.id,
        book.name,
        book.authorName,
        book.published,
        book.inStock,
        book.genre,
        book.coverImgUrl
      )
  );

  //state changes
  const [books, setBooks] = useState(localStorageBooks || defaultBooks);
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    if (!localStorageBooks.length) {
      window.localStorage.setItem("books", JSON.stringify(defaultBooks));
    }
    window.localStorage.setItem("books", JSON.stringify(books));
  }, [books, localStorageBooks.length]);

  //books mehtods
  const addBookToCart = book => {
    if (cart?.find(prevBook => prevBook.id === book.id)) {
      setCart(
        cart.map(mapBook => {
          if (mapBook.id === book.id) {
            book.addToCart();
            return book;
          }
          return mapBook;
        })
      );
      return;
    }
    book.addToCart();
    setCart([...cart, book]);
  };

  const addBookToStore = book => {
    if (books.find(mapBook => mapBook.id === book.id)) return;
    setBooks([...books, book]);
  };

  const removeBookFromCart = id => {
    setCart(cart.filter(book => book.id !== id));
    setBooks(
      books.map(book => {
        if (book.id === id) {
          book.resetStock();
          return book;
        }
        return book;
      })
    );
  };

  const getTotalOrders = () => {
    return cart.reduce((sum, book) => sum + book.inShoppingCart, 0);
  };

  //auth related methods
  const isAdminCheck = user => {
    return user.isAdmin;
  };

  const loginUser = (email, password) => {
    const user = defaultUsers.find(
      user => user.email === email && user.password === password
    );
    if (user) {
      setLoggedInUser(user);
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setLoggedInUser(null);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        cart,
        loggedInUser,
        addBookToCart,
        addBookToStore,
        removeBookFromCart,
        getTotalOrders,
        isAdminCheck,
        loginUser,
        logoutUser,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
