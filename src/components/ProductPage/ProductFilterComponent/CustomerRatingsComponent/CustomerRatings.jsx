import { React, useState } from "react";
import styles from "./CustomerRatings.module.css";
import arrow from "./CustomerRatingsAssets/greyArrow.svg"

function CustomerRatings() {

    const [cRatingClicked, setCRatingClicked] = useState(true);

    function openSection() {
        setCRatingClicked(!cRatingClicked)
        console.log('hello');
    }
  return (
    <>
      <div className={styles.customerRatingsMain}>
        <div className={styles.customerRatingsHeading} onClick={openSection}>
          <h1>CUSTOMER RATINGS</h1>
          <img src={arrow} className={`${styles.arrow} ${cRatingClicked ? styles.rotateArrow : ''}`} alt="arrow"/>
        </div>
        <div className={`${styles.customerRatingOptions} ${cRatingClicked ? '' : styles.hide}`}>
            <div>
                <input type="checkbox" id="fourStar"/>
                <label htmlFor="fourStar">4★ & above</label>
            </div>
             <div>
                <input type="checkbox" id="threeStar"/>
                <label htmlFor="threeStar">3★ & above</label>
            </div>
             <div>
                <input type="checkbox" id="fourStar"/>
                <label htmlFor="twoStar">2★ & above</label>
            </div>
             <div>
                <input type="checkbox" id="oneStar"/>
                <label htmlFor="oneStar">1★ & above</label>
            </div>
        </div>
      </div>
    </>
  );
}

export default CustomerRatings;
