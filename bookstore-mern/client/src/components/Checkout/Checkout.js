import CheckoutItem from "./CheckoutItem";

import { useSelector } from "react-redux";

import classes from "./Checkout.module.css";
import { Link } from "react-router-dom";

const Checkout = props => {
  const books = useSelector(state => state.books);

  const inCart = books.filter(book => book.inShoppingCart);

  const total = inCart.reduce((acc, book) => acc + book.orderCount, 0);

  return (
    <div
      className={"row border border-2 mt-3 container p-4 " + classes.Checkout}
    >
      <h2 className="mb-3">Your Order:</h2>
      <div className="row ms-0 border-top border-1">
        <ul className="list-group list-group-flush">
          {inCart.map(book => (
            <CheckoutItem book={book} key={book.id} />
          ))}
        </ul>
      </div>
      <div className="row ms-0  border-top pt-3 p-0 border-1 mt-3">
        <div className="col-6">
          <div className="btn-group">
            <button className="btn btn-outline-success">Confirm</button>
            <Link to="/shopping-cart">
              <button className="btn btn-outline-danger">Cancel</button>
            </Link>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <span className="lead align-self-center me-1">Total: </span>
          <span className={"fs-4 text-right me-2 " + classes.total}>
            {total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
