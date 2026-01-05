import styles from "./FilterCategories.module.css";
import { useContext } from "react";
import { filterValueContext } from "../../ProductPageFinal/ProductPageFinal";

function CheckBox(props) {
  // const {filterInputValue, setFilterInputValue} = useContext(filterValueContext);
  // console.log(filterInputValue);
  
  

  return (
    <>
      <div className={styles.checkBox}>
        <input
          type="checkbox"
          id={props.name.toLowerCase()}
          value={props.name}
          onChange={props.onChange}
        />
        <label htmlFor={props.name.toLowerCase()}>{props.name}</label>
      </div>
    </>
  );
}

export default CheckBox;
