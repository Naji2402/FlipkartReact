import { React } from "react";
import CheckBox from "../CheckBox";

function PriceFilterOptions() {

  function priceFilter() {
    
  }

  return (
    <>
      <div>
        <CheckBox name="Rs. 500 and Below" value=" <=500 " />
        <CheckBox name="Rs. 501 - Rs. 1000" value=" 501 - 1000 " />
        <CheckBox name="Rs. 1001 - Rs. 2500" value=" 1001 - 2500 " />
        <CheckBox name="Rs. 5001 - Rs. Above" value=" >=5001 " />
      </div>
    </>
  );
}

export default PriceFilterOptions;
