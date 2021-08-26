const CheckoutItem = props => {
  const { book } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-end py-3">
      <div className="d-flex align-items-end">
        <h4 className="mb-1">{book.title}</h4>
        <span className="fst-italic text-secondary ms-3 mb-1">
          by {book.authorName}
        </span>
      </div>
      <p className="mb-0 align-self-center fs-4">x {book.orderCount}</p>
    </li>
  );
};

export default CheckoutItem;
