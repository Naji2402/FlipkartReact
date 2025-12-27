import { React } from "react";
import styles from "../FilterCategories.module.css";
import CheckBox from "../CheckBox.jsx";

function CRatingsFilterOptions() {
  return (
    <>
      <div className={styles.CRatingsFilterOptions}>
        <CheckBox name="4★ & above"/>
        <CheckBox name="3★ & above"/>
        <CheckBox name="2★ & above"/>
        <CheckBox name="1★ & above"/>
      </div>
    </>
  );
}

export default CRatingsFilterOptions;
