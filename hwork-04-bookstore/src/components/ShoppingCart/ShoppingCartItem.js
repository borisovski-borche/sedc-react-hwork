import BooksContext from "../../context/BoooksContext/books.context";
import classes from "./ShoppingCartItem.module.css";
import { useContext } from "react";

const ShoppingCartItem = props => {
  const booksContext = useContext(BooksContext);

  const { book } = props;

  return (
    <li className={`list-group-item ${classes.ShoppingCartItem}`}>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img className="img-fluid" src={book.coverImgUrl} alt={book.name} />
          <div className="col-8 m-3">
            <h4>{book.name}</h4>
            <p className="fst-italic">by {book.authorName}</p>
          </div>
        </div>
        <div className={classes.orderedDisplay}>
          <p className="fs-4">
            In Cart:{" "}
            <span className="badge bg-success">{book.inShoppingCart}</span>
          </p>
        </div>
        <button
          className={`btn btn-danger ${classes.remove}`}
          onClick={() => booksContext.removeBookFromCart(book.id)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </li>
  );
};

export default ShoppingCartItem;
