import { useState } from "react";
import styles from "./DiscountFilter.module.css";
import arrow from "./DiscountFilterAssets/greyArrow.svg";

function DiscountFilter() {
  const [cRatingClicked, setCRatingClicked] = useState(false);

  function openSection() {
    setCRatingClicked(!cRatingClicked);
    console.log("hello");
  }
  return (
    <>
      <div className={styles.customerRatingsMain}>
        <div className={styles.customerRatingsHeading} onClick={openSection}>
          <h1>DISCOUNT</h1>
          <img
            src={arrow}
            className={`${styles.arrow} ${
              cRatingClicked ? styles.rotateArrow : ""
            }`}
            alt="arrow"
          />
        </div>
        <div
          className={`${styles.customerRatingOptions} ${
            cRatingClicked ? "" : styles.hide
          }`}
        >
          <div>
            <input type="checkbox" id="fiftyPerc" />
            <label htmlFor="fiftyPerc">50% or more</label>
          </div>
          <div>
            <input type="checkbox" id="seventyPerc" />
            <label htmlFor="seventyPerc">70% or more</label>
          </div>
          <div>
            <input type="checkbox" id="sixtyPerc" />
            <label htmlFor="sixtyPerc">60% or more</label>
          </div>
          <div>
            <input type="checkbox" id="fourtyPerc" />
            <label htmlFor="fourtyPerc">40% or more</label>
          </div>
          <div>
            <input type="checkbox" id="thirtyPerc" />
            <label htmlFor="thirtyPerc">30% or more</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscountFilter;
