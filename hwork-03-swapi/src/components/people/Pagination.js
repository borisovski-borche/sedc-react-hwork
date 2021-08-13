import { useState, useEffect } from "react";
import GeneratePagination from "../../util/paginationAlgorithm";

const Pagination = props => {
  const [incrementor, setIncrementor] = useState(1);

  const { total, pageDisplayNum, currentPage, changePage } = props;
  const pageBtnArr = GeneratePagination(total, pageDisplayNum);

  useEffect(() => {
    if (currentPage > pageDisplayNum * incrementor) {
      setIncrementor(incrementor + 1);
    }
    if (pageDisplayNum * incrementor - pageDisplayNum === currentPage) {
      setIncrementor(incrementor - 1);
    }
  }, [incrementor, setIncrementor, currentPage, pageDisplayNum]);

  return (
    <nav aria-label="pagination navigation">
      <ul className="pagination d-flex justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            href="#"
            onClick={() => changePage(currentPage - 1)}
          >
            Prev
          </button>
        </li>
        {pageBtnArr[incrementor - 1]?.map(num => {
          return (
            <li
              key={num}
              className={`page-item ${num === currentPage ? "active" : ""}`}
            >
              <button
                className="page-link "
                href="#"
                onClick={() => changePage(num)}
              >
                {num}
              </button>
            </li>
          );
        })}

        <li
          className={`page-item ${
            Math.ceil(props.total / 10) === props.currentPage ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            href="#"
            onClick={() => props.changePage(props.currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
