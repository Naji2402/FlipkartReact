import { React } from "react";
import styles from "../FilterCategories.module.css";
import CRatingsOptions from "./CRatingsOptions.jsx";

function CRatingsFilterOptions() {
  return (
    <>
      <div className={styles.CRatingsFilterOptions}>
        <CRatingsOptions name="4★ & above"/>
        <CRatingsOptions name="3★ & above"/>
        <CRatingsOptions name="2★ & above"/>
        <CRatingsOptions name="1★ & above"/>
      </div>
    </>
  );
}

export default CRatingsFilterOptions;
