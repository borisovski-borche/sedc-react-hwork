import { Fragment, useEffect } from "react";

import BookItem from "./BookItem";

import * as actionCreators from "../../state/actions";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const BookList = props => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    const AC = bindActionCreators(actionCreators, dispatch);
    if (!books.length) {
      AC.fetchBooksFromDb();
    }
  }, [dispatch, books.length]);

  return (
    <Fragment>
      <h1 className="display-3 text-center my-4">Available Books</h1>
      <div className="d-flex flex-wrap">
        {books.map(book => {
          return <BookItem book={book} key={book.id} />;
        })}
      </div>
    </Fragment>
  );
};

export default BookList;
