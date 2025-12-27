import styles from "../FilterCategories.module.css";
import search from "../../FilterSortImages/SearchIcon.svg";
import CheckBox from "../CheckBox";

function BrandFilterOptions() {
  return (
    <>
      <div className={styles.brandFilterOptions}>
        <div className={styles.searchSection}>
          <img src={search} alt="search logo" />
          <input type="search" placeholder="Search Brand" />
        </div>
        <div className={styles.brandOptions}>
          <CheckBox name="NIVIA" />
          <CheckBox name="COSCO" />
          <CheckBox name="VECTOR X" />
          <CheckBox name="RASCO" />
          <CheckBox name="PUMA" />
          <CheckBox name="MAYOR" />
          <CheckBox name="MATTZIG" />
          <CheckBox name="DENOVO" />
          <CheckBox name="Dinetic" />
          <CheckBox name="ULTIMATE GOAL" />
          <CheckBox name="DIBACO SPORTS" />
          <CheckBox name="BOLDUP" />
          <CheckBox name="YMD" />
          <CheckBox name="NICE" />
          <CheckBox name="gamers hub" />
        </div>
      </div>
    </>
  );
}

export default BrandFilterOptions;