import { useContext } from "react";
import BooksContext from "../../context/BoooksContext/books.context";
import BookItem from "./BookItem";

const BookList = props => {
  const booksContext = useContext(BooksContext);

  console.log(booksContext.books);

  return (
    <div className="d-flex flex-wrap">
      {booksContext.books.map(book => {
        return <BookItem book={book} key={book.id} />;
      })}
    </div>
  );
};

export default BookList;
