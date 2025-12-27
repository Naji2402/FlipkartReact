import { React } from "react";

import styles from '../FilterCategories.module.css'

function PriceOptions(props) {
  return (
    <>
      <div className={styles.priceOptions}>
        <input type="checkbox" id={props.name.toLowerCase()} />
        <label htmlFor={props.name.toLowerCase()}>{props.name}</label>
      </div>
    </>
  );
}

export default PriceOptions;
