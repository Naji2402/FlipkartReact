import { React, useState } from "react";
import styles from "./ProductFilter.module.css";
import arrow from "./ProductFilterAssets/greyArrow.svg";
import blackArrow from "./ProductFilterAssets/rightArrow.svg";
import BrandFilter from "./BrandFilterComponent/BrandFilter.jsx";
import PriceFilter from "./PriceFilter.jsx";

function ProductFilter() {
  const [isClicked, setIsClicked] = useState(true);
  const [doShowMore, setDoShowMore] = useState(false);

  function openCategories() {
    setIsClicked(!isClicked);
  }

  function showMore() {
    setDoShowMore(!doShowMore);
  }

  return (
    <>
      <div className={styles.filterSection}>
        <div className={styles.filterHeading}>
          <h1>Filters</h1>
        </div>
        <div className={styles.categories}>
          <h3>CATEGORIES</h3>
          <div className={styles.sportsCategory}>
            <img src={arrow} alt="arrow" />
            <span>Sports</span>
          </div>
          <div className={styles.footballCategory}>
            <div
              className={styles.footballCategoryHeading}
              onClick={openCategories}
            >
              <img
                src={blackArrow}
                alt="arrow"
                className={isClicked ? styles.footballCategoryRotate : ""}
              />
              <span>Football</span>
            </div>
            <div
              className={`${styles.footballCategoryList} ${
                isClicked ? "" : styles.hide
              }`}
            >
              <ul>
                <li>Footballs</li>
                <li>Football Gloves</li>
                <li>Football Guards</li>
                <li>Football Kit</li>
                <li>Football Bags</li>
              </ul>
              <div className={`${doShowMore ? "" : styles.hideNew}`}>
                <ul>
                  <li>Pop up Goal & Targets</li>
                  <li>Bibs</li>
                  <li>Football Foul Card</li>
                  <li>Football Nets</li>
                </ul>
              </div>
               <p onClick={showMore}>
                {doShowMore ? "Show less" : "Show 4 more"}
              </p>
            </div>
          </div>
        </div>
      <BrandFilter />
      <PriceFilter />
      </div>
    </>
  );
}

export default ProductFilter;
