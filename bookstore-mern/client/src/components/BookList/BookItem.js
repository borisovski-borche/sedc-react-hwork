import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/actions";

import classes from "./BookItem.module.css";

const BookItem = props => {
  const { book } = props;
  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators, dispatch);

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
              <h5 className="card-title">{book.title}</h5>
              <p className="fst-italic">by: {book.authorName}</p>
              <ul className="list-group list-group-flush">
                <li className="bold">Published in {book.published}</li>
                <li>Genre: {book.genre}</li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <button
                disabled={book.inShoppingCart}
                className={`btn btn-${
                  !book.inShoppingCart ? "primary" : "success"
                } m-2`}
                onClick={() => {
                  AC.addBookToCart(book);
                }}
              >
                {!book.inShoppingCart ? "Add to Cart" : "Added to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
