import { React } from "react";
import styles from '../FilterCategories.module.css'

function BrandOption(props) {
  return (
    <>
      <div className={styles.brandOption}>
        <input type="checkbox" id={(props.name).toLowerCase()} />
        <label htmlFor={(props.name).toLowerCase()}>{props.name}</label>
      </div>
    </>
  );
}

export default BrandOption;
