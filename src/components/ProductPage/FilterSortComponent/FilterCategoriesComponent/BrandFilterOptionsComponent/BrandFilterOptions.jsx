import { React } from "react";
import styles from "../FilterCategories.module.css";
import search from "../../FilterSortImages/SearchIcon.svg";
import BrandOption from "./BrandOption";

function BrandFilterOptions() {
  return (
    <>
      <div className={styles.brandFilterOptions}>
        <div className={styles.searchSection}>
          <img src={search} alt="search logo" />
          <input type="search" placeholder="Search Brand" />
        </div>
        <div className={styles.brandOptions}>
            <BrandOption name="NIVIA" />
            <BrandOption name="COSCO" />
            <BrandOption name="VECTOR X" />
            <BrandOption name="RASCO" />
            <BrandOption name="PUMA" />
            <BrandOption name="MAYOR" />
            <BrandOption name="MATTZIG" />
            <BrandOption name="DENOVO" />
            <BrandOption name="Dinetic" />
            <BrandOption name="ULTIMATE GOAL" />
            <BrandOption name="DIBACO SPORTS" />
            <BrandOption name="BOLDUP" />
            <BrandOption name="YMD" />
            <BrandOption name="NICE" />
            <BrandOption name="gamers hub" />
        </div>
      </div>
    </>
  );
}

export default BrandFilterOptions;
