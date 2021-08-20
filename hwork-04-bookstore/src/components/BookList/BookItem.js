import classes from "./BookItem.module.css";
import { useContext } from "react";
import BooksContext from "../../context/BoooksContext/books.context";

const BookItem = props => {
  const bookContext = useContext(BooksContext);
  const { book } = props;

  return (
    <div className={classes.BookItem}>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={book.coverImgUrl}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{book.name}</h5>
              <p className="fst-italic">by: {book.authorName}</p>
              <ul className="list-group list-group-flush">
                <li className="bold">Published in {book.published}</li>
                <li>Genre: {book.genre}</li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="fs-5 m-0 ms-3">
                Stock:{" "}
                <span
                  className={`badge bg-${book.inStock ? "success" : "danger"}`}
                >
                  {book.inStock}
                </span>
              </p>
              <button
                disabled={!book.inStock}
                className={`btn btn-${book.inStock ? "primary" : "danger"} m-2`}
                onClick={() => bookContext.addBookToCart(book)}
              >
                {book.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
