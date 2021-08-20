import BooksContext from "./books.context";
import { Book } from "./book.model";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";

const defaultBooks = [
  new Book(
    uuid(),
    "Name of the Wind",
    "Patrick Rothfuss",
    "2007",
    30,
    "Fantasy",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1270352123l/186074.jpg"
  ),
  new Book(
    uuid(),
    "Project Hail Mary",
    "Andy Weir",
    "2021",
    5,
    "Science Fiction",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597695864l/54493401.jpg"
  ),
  new Book(
    uuid(),
    "The Pillars of the Earth",
    "Ken Follet",
    "1989",
    120,
    "Historical Fiction",
    "https://upload.wikimedia.org/wikipedia/en/b/b3/PillarsOfTheEarth.jpg"
  ),
  new Book(
    uuid(),
    "Red Rising",
    "Pierce Brown",
    "2014",
    64,
    "Science Fiction",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1461354651l/15839976.jpg"
  ),
];

const BooksContextProvider = props => {
  const [books, setBooks] = useState(defaultBooks);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("books", JSON.stringify(books));

    const parsedBooks = JSON.parse(window.localStorage.getItem("books"));

    if (books.length !== parsedBooks.length) {
      setBooks(parsedBooks);
    }
  }, [books]);

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

  return (
    <BooksContext.Provider
      value={{
        books,
        cart,
        addBookToCart,
        addBookToStore,
        removeBookFromCart,
        getTotalOrders,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
