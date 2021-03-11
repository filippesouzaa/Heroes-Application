import React from "react";
import "./pagination.css";

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav className="pagination">
        {pageNumbers.map((number) => (
          <ul>
            <li key={number}>
              <spam
                style={{ cursor: `pointer` }}
                onClick={() => paginate(number)}
              >
                {number}
              </spam>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;
