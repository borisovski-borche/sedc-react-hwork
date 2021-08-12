import { useState, useEffect } from "react";
import GeneratePagination from "../util/paginationAlgorithm";

const Pagination = props => {
  const [incrementor, setIncrementor] = useState(1);

  const pageBtnArr = GeneratePagination(props.total, props.pageDisplayNum);

  useEffect(() => {
    if (props.currentPage > props.pageDisplayNum * incrementor) {
      setIncrementor(incrementor + 1);
    }
    if (
      props.pageDisplayNum * incrementor - props.pageDisplayNum ===
      props.currentPage
    ) {
      setIncrementor(incrementor - 1);
    }
  }, [incrementor, setIncrementor, props.currentPage, props.pageDisplayNum]);

  return (
    <nav aria-label="pagination navigation">
      <ul className="pagination">
        <li
          className={`page-item ${props.currentPage === 1 ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            href="#"
            onClick={() => props.changePage(props.currentPage - 1)}
          >
            Prev
          </button>
        </li>
        {pageBtnArr[incrementor - 1]?.map(num => {
          return (
            <li
              key={num}
              className={`page-item ${
                num === props.currentPage ? "active" : ""
              }`}
            >
              <button
                className="page-link "
                href="#"
                onClick={() => props.changePage(num)}
              >
                {num}
              </button>
            </li>
          );
        })}

        <li className={`page-item ${props.nextDisabled ? "disabled" : ""}`}>
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
