import { useState } from "react";
import styles from "./PriceFilter.module.css";

function PriceFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  function minPriceChange(e) {
    setMinPrice(Number(e.target.value))
    // console.log(minPrice);
  }

  function maxpriceChange(e) {
    setMaxPrice(Number(e.target.value))
    // console.log(maxPrice);
  }

  return (
    <>
      <div className={styles.priceFilterSection}>
        <div className={styles.priceHeading}>
          <h1>PRICE</h1>
        </div>
        <div>
          <div className={styles.sliderMain}>
            <div className={styles.priceGraph}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.rangeFill}></div>
            <input
              type="range"
              value={minPrice}
              min="0"
              max="5000"
              step="500"
              onChange={(e) => minPriceChange(e)}
            />
            <input
              type="range"
              value={maxPrice}
              min="0"
              max="5000"
              step="500"
              onChange={(e) => maxpriceChange(e)}
            />
            <div className={styles.priceRangeSteps}>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
            <div className={styles.minMaxPriceShow}>
                <select>
                    <option defaultValue="Min">Min</option>
                    <option defaultValue="500">500</option>
                    <option defaultValue="5000">1000</option>
                    <option defaultValue="5000">2500</option>
                    <option defaultValue="5000">5000+</option>
                </select>
                <p>to</p>
                <select defaultValue="5000+">
                    <option defaultValue="500">500</option>
                    <option defaultValue="5000">1000</option>
                    <option defaultValue="5000">2500</option>
                    <option defaultValue="5000">5000+</option>
                </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceFilter;
