import { React } from "react";
import CheckBox from "../CheckBox";

function PriceFilterOptions() {
  return (
    <>
      <div>
        <CheckBox name="Rs. 500 and Below" />
        <CheckBox name="Rs. 501 - Rs. 1000" />
        <CheckBox name="Rs. 1001 - Rs. 2500" />
        <CheckBox name="Rs. 5001 - Rs. Above" />
      </div>
    </>
  );
}

export default PriceFilterOptions;
