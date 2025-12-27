import { useState } from "react";
import styles from "./FilterCategories.module.css";
import arrow from "../FilterSortImages/leftArrow.svg";
import { useNavigate } from "react-router-dom";
import BrandFilterOptions from "./BrandFilterOptionsComponent/BrandFilterOptions";
import CRatingsFilterOptions from "./CRatingsFilterOptionsComponent/CRatingsFilterOptions";
import PriceFilterOptions from "./PriceFilterOptionsComponent/PriceFilterOptions";

function FilterCategories() {
  const [active, setActive] = useState("Brand");

  function brandsClick() {
    setActive("Brand");
  }

  function cRatingClick() {
    setActive("rating");
  }

  function priceClick() {
    setActive("price");
  }

  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.filterPopup} `}>
        <div className={styles.filterPopupHeading}>
          <div onClick={() => navigate(-1)}>
            <img src={arrow} alt="arrow" />
            <h1>Filters</h1>
          </div>
          <span>Clear Filters</span>
        </div>
        <div className={styles.filterPopupMain}>
          <div className={styles.filterPopupCategories}>
            <div
              className={`${styles.popupCategory} ${
                active === "Brand" ? styles.clicked : ""
              } `}
              onClick={brandsClick}
            >
              <p>Brand</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "rating" ? styles.clicked : ""
              } `}
              onClick={cRatingClick}
            >
              <p>Customer Ratings</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "price" ? styles.clicked : ""
              } `}
              onClick={priceClick}
            >
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
            {active === "Brand" ? <BrandFilterOptions /> : ""}
            {active === "rating" ? <CRatingsFilterOptions /> : ""}
            {active === "price" ? <PriceFilterOptions /> : ""}
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
