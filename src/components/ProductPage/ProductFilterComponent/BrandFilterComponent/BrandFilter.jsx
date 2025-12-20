import { useState } from "react";
import styles from "./BrandFilter.module.css";
import arrow from "../ProductFilterAssets/greyArrow.svg";
import search from "./BrandFIlterAssets/Search.svg"

function BrandFilter() {
  const [brandClick, setBrandClick] = useState(true);
  function openFilter() {
    setBrandClick(!brandClick);
  }

  return (
    <>
      <div className={styles.filterSection}>
        <div className={styles.filterHeading} onClick={openFilter}>
          <h1>BRAND</h1>
          <img
            src={arrow}
            className={`${styles.arrow} ${
              brandClick ? styles.arrowRotate : ""
            }`}
            alt="arrow"
          />
        </div>
        <div>
          <div
            className={`${styles.brandList} ${brandClick ? styles.hide : ""}`}
          >
            <div className={styles.brandSearch}>
              <img src={search} alt="" />
              <input
                type="search"
                
                placeholder="Search Brand"
              />
            </div>
            <div>
              <input type="checkbox" value="NIVIA" id="NIVIA" />
              <label for="NIVIA">NIVIA</label>
            </div>
            <div>
              <input type="checkbox" value="COSCO" id="COSCO" />
              <label for="COSCO">COSCO</label>
            </div>
            <div>
              <input type="checkbox" value="VECTOR X" id="VECTOR X" />
              <label for="VECTOR X">VECTOR X</label>
            </div>
            <div>
              <input type="checkbox" value="RASCO" id="RASCO" />
              <label for="RASCO">RASCO</label>
            </div>
            <div>
              <input type="checkbox" value="PUMA" id="PUMA" />
              <label for="PUMA">PUMA</label>
            </div>
            <p>605 MORE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandFilter;
