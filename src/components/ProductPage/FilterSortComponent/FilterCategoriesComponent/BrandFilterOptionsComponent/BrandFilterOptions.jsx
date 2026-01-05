import styles from "../FilterCategories.module.css";
import search from "../../FilterSortImages/SearchIcon.svg";
import CheckBox from "../CheckBox";
import { useContext } from "react";
import { filterValueContext } from "../../../ProductPageFinal/ProductPageFinal";

function BrandFilterOptions() {
  const { filterInputValue, setFilterInputValue } =
    useContext(filterValueContext);

  function filterValue(e) {
    let newValue;
    if (e.currentTarget.checked) {
      newValue = e.currentTarget.value;
      setFilterInputValue((prev) => [...prev, newValue]);
    } else {
      setFilterInputValue((prev) =>
        prev.filter((val) => val != e.currentTarget.value)
      );
    }
  }

  

  return (
    <>
      <div className={styles.brandFilterOptions}>
        <div className={styles.searchSection}>
          <img src={search} alt="search logo" />
          <input type="search" placeholder="Search Brand" />
        </div>
        <div className={styles.brandOptions}>
          <CheckBox name="NIVIA" onChange={filterValue} />
          <CheckBox name="COSCO" onChange={filterValue} />
          <CheckBox name="VECTORX" onChange={filterValue} />
          <CheckBox name="RASCO" onChange={filterValue} />
          <CheckBox name="PUMA" onChange={filterValue} />
          <CheckBox name="MAYOR" onChange={filterValue} />
          <CheckBox name="LatinX" onChange={filterValue} />
          <CheckBox name="DENOVO" onChange={filterValue} />
          <CheckBox name="Dinetic" onChange={filterValue} />
          <CheckBox name="ULTIMATE GOAL" onChange={filterValue} />
          <CheckBox name="DIBACO SPORTS" onChange={filterValue} />
          <CheckBox name="BOLDUP" onChange={filterValue} />
          <CheckBox name="YMD" onChange={filterValue} />
          <CheckBox name="NICE" onChange={filterValue} />
          <CheckBox name="gamers hub" onChange={filterValue} />
        </div>
      </div>
    </>
  );
}

export default BrandFilterOptions;
