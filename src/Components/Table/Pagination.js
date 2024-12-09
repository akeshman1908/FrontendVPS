import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange, totalResults, itemsPerPage }) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalResults);

  return (
    <div className={styles.paginationContainer}>
      {/* Resultaten Samenvatting */}
      <div className={styles.summary}>
        <span>
          Showing <strong>{startItem}</strong> to <strong>{endItem}</strong> of <strong>{totalResults}</strong> results
        </span>
      </div>

      {/* Paginatie Navigatie */}
      <div className={styles.controls}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.button} ${currentPage === 1 ? styles.disabled : ""}`}
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.button} ${currentPage === totalPages ? styles.disabled : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
