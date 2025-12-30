import { useState } from "react";
import styles from "./LargeSort.module.css";
import { useContext } from "react";
import { sortValueContext } from "../ProductPageFinal/ProductPageFinal";

function LargeSort() {
  const { sortInputValue, setSortInputValue } = useContext(sortValueContext);

  function sortClick(e) {
    setSortInputValue(e.currentTarget.dataset.sortValue);
  }

  return (
    <>
      <div className={styles.sortMain}>
        <div className={styles.sortHeading}>
          <span className={styles.sortOption}>Sort By</span>
        </div>
        <div
          className={styles.sortOptions}
          onClick={sortClick}
          data-sort-value="popularity"
        >
          <span className={styles.sortOption}>Popularity</span>
        </div>
        <div
          className={styles.sortOptions}
          onClick={sortClick}
          data-sort-value="LowToHigh"
        >
          <span className={styles.sortOption}>Price -- Low to High</span>
        </div>
        <div
          className={styles.sortOptions}
          onClick={sortClick}
          data-sort-value="HighToLow"
        >
          <span className={styles.sortOption}>Price -- High to Low</span>
        </div>
        <div
          className={styles.sortOptions}
          onClick={sortClick}
          data-sort-value="Newest"
        >
          <span className={styles.sortOption}>Newest First</span>
        </div>
      </div>
    </>
  );
}

export default LargeSort;
