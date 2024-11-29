import React from "react";

const Pagination = ({ currentPage, totalPages, handleNextPage, handlePreviousPage }) => {
  return (
    <div className="pagination">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        Previous
      </button>
      <span aria-live="polite">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
