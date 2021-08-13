import React from "react";

const PlanetPagination = props => {
  const { prevUrl, nextUrl, onChangeCurrentUrl, pageNum } = props;

  const prevClassName = `page-item ${prevUrl || "disabled"}`;
  const nextClassName = `page-item ${nextUrl || "disabled"}`;

  return (
    <nav aria-label="planet-pagination navigation">
      <ul className="pagination d-flex justify-content-center">
        <li className={prevClassName}>
          <button
            className="page-link"
            onClick={() => onChangeCurrentUrl(prevUrl)}
          >
            &laquo;
          </button>
        </li>
        <li className="page-item active">
          <button className="page-link ">{pageNum}</button>
        </li>
        <li className={nextClassName}>
          <button
            className="page-link"
            onClick={() => onChangeCurrentUrl(nextUrl)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PlanetPagination;
