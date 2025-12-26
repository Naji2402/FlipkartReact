import { useState } from "react";
import styles from "./FilterCategories.module.css";
import arrow from "../FilterSortImages/leftArrow.svg";
import { useNavigate } from "react-router-dom";
import BrandFilterOptions from "./BrandFilterOptionsComponent/BrandFilterOptions";

function FilterCategories() {
  const [clicked, setClicked] = useState(true);

  function categoryClicked() {
    setClicked(!clicked)
  }


  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.filterPopup} `}>
        <div className={styles.filterPopupHeading}>
          <div onClick={() => navigate(-1)} >
            <img src={arrow} alt="arrow" />
            <h1>Filters</h1>
          </div>
          <span>Clear Filters</span>
        </div>
        <div className={styles.filterPopupMain}>
          <div className={styles.filterPopupCategories} onClick={categoryClicked}>
            <div className={`${styles.popupCategory} ${clicked ? styles.clicked : ''} `}>
              <p>Brand</p>
            </div>
            <div className={styles.popupCategory}>
              <p>Customer Ratings</p>
            </div>
            <div className={styles.popupCategory}>
              <p>Price</p>
            </div>
            <div className={styles.popupCategory}>
              <p>Discount</p>
            </div>
            <div className={styles.popupCategory}>
              <p>F-Assured</p>
            </div>
            <div className={styles.popupCategory}>
              <p>Offers</p>
            </div>
            <div className={styles.popupCategory}>
              <p>Availability</p>
            </div>
            <div className={styles.popupCategory}>
              <p>GST Invoice Available</p>
            </div>
            <div className={styles.popupCategory}>
              <p>New Arrivals</p>
            </div>
            <div className={styles.popupCategory}>
              <p>Category</p>
            </div>
          </div>
          <div className={styles.filterPopupOptions}>
            {clicked ? <BrandFilterOptions /> : ''}
          </div>
        </div>
        <div className={styles.filterPopupBottom}>
          <div>
            <h3>6,151</h3>
            <p>products found</p>
          </div>
          <button onClick={() => navigate(-1)}>Apply</button>
        </div>
      </div>
    </>
  );
}

export default FilterCategories;
