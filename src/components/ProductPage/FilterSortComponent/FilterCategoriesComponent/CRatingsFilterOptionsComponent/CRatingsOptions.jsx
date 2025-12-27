import { React } from "react";
import styles from "../FilterCategories.module.css"

function CRatingsOptions(props) {
  return (
    <>
      <div className={styles.ratingOption}>
        <input type="checkbox" id={(props.name).toLowerCase()} />
        <label htmlFor={(props.name).toLowerCase()}>{props.name}</label>
      </div>
    </>
  );
}

export default CRatingsOptions;
